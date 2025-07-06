import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatWidgetProps {
  onSendMessage?: (message: string) => void;
  demoMode?: boolean;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onSendMessage, demoMode = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hallo, ich bin Bandy, willkommen bei Bandwerk. Wie kann ich dir helfen, suchst du etwas bestimmtes?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userId] = useState(() => Math.floor(1000 + Math.random() * 9000).toString());
  const messagesEndRef = useRef<HTMLDivElement>(null);


  const sendWebhookMessage = async (messageText: string) => {
    console.log('🚀 Starting webhook request...');
    
    const webhookUrl = `https://www.dailyjokenewsletter.com/webhook/chatbot?message=${encodeURIComponent(messageText)}&sender=user&user-id=${userId}`;
    
    try {
      console.log('🔗 Webhook URL:', webhookUrl);
      
      const response = await fetch(webhookUrl, {
        method: 'GET',
        mode: 'cors'
      });

      console.log('📡 Response received:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });

      if (response.ok) {
        const responseData = await response.text();
        console.log('✅ Webhook response:', responseData);
        
        // Try to parse as JSON, fallback to plain text
        let botResponseText = responseData;
        try {
          const jsonData = JSON.parse(responseData);
          botResponseText = jsonData.response || jsonData.message || jsonData.reply || jsonData.text || responseData;
        } catch (e) {
          // Use plain text response
        }
        
        const botMessage: Message = {
          id: Date.now() + 1,
          text: botResponseText,
          sender: 'bot',
          timestamp: new Date()
        };

        setIsTyping(false);
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error(`Webhook failed: ${response.status} ${response.statusText}`);
      }
      
    } catch (error) {
      console.error('💥 Webhook error:', error);
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: `Webhook Fehler: ${error.message}`,
        sender: 'bot',
        timestamp: new Date()
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
    }
  };


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const messageText = inputValue;
    setInputValue('');
    setIsTyping(true);

    await sendWebhookMessage(messageText);

    // Call original callback if provided
    if (onSendMessage) {
      onSendMessage(messageText);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/67294fdb-26a1-40ee-9427-4416a4dd05ac.png" 
                alt="Bandy Logo" 
                className="w-6 h-6"
              />
              <span className="font-medium text-white">Bandy</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${message.sender}`}
              >
                {message.text}
              </div>
            ))}
            {isTyping && (
              <div className="typing-indicator">
                <span>Bandy schreibt</span>
                <div className="typing-dots">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-container">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Schreibe deine Nachricht hier..."
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              disabled={!inputValue.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <div
        className="chat-bubble"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src="/lovable-uploads/67294fdb-26a1-40ee-9427-4416a4dd05ac.png" 
          alt="Bandy Logo" 
          className="h-8 w-8"
        />
      </div>
    </div>
  );
};

export default ChatWidget;