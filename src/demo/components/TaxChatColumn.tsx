import { useState, useRef, useEffect } from 'react';
import { Send, Plus, Minus } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface TaxChatColumnProps {
  title: string;
  webhookUrl: string;
  isExpanded: boolean;
  onToggle: () => void;
  colorTheme: 'left' | 'middle';
}

const TaxChatColumn = ({ title, webhookUrl, isExpanded, onToggle, colorTheme }: TaxChatColumnProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        const responseText = await response.text();
        let botResponse = 'Antwort erhalten';
        
        try {
          // Try to parse as JSON
          const data = JSON.parse(responseText);
          botResponse = data.response || data.message || responseText;
        } catch {
          // If not JSON, use the plain text response directly
          botResponse = responseText;
        }
        
        // Only show message if it's not just "Workflow was started"
        if (botResponse && botResponse !== 'Workflow was started') {
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: botResponse,
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
        }
      } else {
        throw new Error('Webhook request failed');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Entschuldigung, es gab einen Fehler bei der Verbindung.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`tax-chat-column ${colorTheme}`}>
      <div className="column-header">
        <button
          className="toggle-button"
          onClick={onToggle}
          aria-label={isExpanded ? 'Minimize' : 'Expand'}
        >
          {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
        </button>
        <div className="vertical-title">{title}</div>
      </div>

      {isExpanded && (
        <>
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'message-user' : 'message-bot'}`}
              >
                <div className="message-bubble">
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message message-bot">
                <div className="message-bubble typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nachricht eingeben..."
              className="chat-input"
              disabled={isTyping}
            />
            <button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="send-button"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaxChatColumn;
