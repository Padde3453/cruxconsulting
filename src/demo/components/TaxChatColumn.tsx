import { useState, useRef, useEffect } from 'react';
import { Send, Plus, Minus } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { toast } from '@/hooks/use-toast';

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

const MAX_MESSAGE_LENGTH = 2000;
const CHAR_COUNTER_THRESHOLD = 1800;

// Helper function to get or create session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('chatSessionId');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('chatSessionId', sessionId);
  }
  return sessionId;
};

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

    // Validate message length
    if (inputValue.length > MAX_MESSAGE_LENGTH) {
      toast({
        title: "Nachricht zu lang",
        description: `Die Nachricht darf maximal ${MAX_MESSAGE_LENGTH} Zeichen enthalten.`,
        variant: "destructive"
      });
      return;
    }

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
      const sessionId = getSessionId();
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          timestamp: new Date().toISOString(),
          sessionId: sessionId
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
      
      // Determine error type and show appropriate feedback
      let errorTitle = 'Verbindungsfehler';
      let errorDescription = 'Es gab einen Fehler bei der Verbindung zum Server.';
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        errorTitle = 'Netzwerkfehler';
        errorDescription = 'Bitte überprüfen Sie Ihre Internetverbindung.';
      }
      
      toast({
        title: errorTitle,
        description: errorDescription,
        variant: "destructive"
      });
      
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
        <div className="chat-content-wrapper">
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'message-user' : 'message-bot'}`}
              >
                <div className="message-bubble">
                  {message.sender === 'bot' ? (
                    <ReactMarkdown>{message.text}</ReactMarkdown>
                  ) : (
                    message.text
                  )}
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
            <div style={{ position: 'relative', flex: 1 }}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nachricht eingeben..."
                className="chat-input"
                disabled={isTyping}
                maxLength={MAX_MESSAGE_LENGTH}
              />
              {inputValue.length > CHAR_COUNTER_THRESHOLD && (
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '12px',
                    fontSize: '12px',
                    color: inputValue.length >= MAX_MESSAGE_LENGTH ? '#ef4444' : '#94a3b8',
                    fontWeight: '500',
                    pointerEvents: 'none'
                  }}
                >
                  {inputValue.length}/{MAX_MESSAGE_LENGTH}
                </div>
              )}
            </div>
            <button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isTyping || inputValue.length > MAX_MESSAGE_LENGTH}
              className="send-button"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxChatColumn;
