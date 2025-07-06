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

  // Auto-maximize chatbot after 10 seconds and send test message
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Send automatic test message after opening
      setTimeout(() => {
        sendTestMessage();
      }, 2000);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const sendWebhookMessage = async (messageText: string) => {
    console.log('🚀 Starting webhook request...');
    console.log('🌐 Current origin:', window.location.origin);
    console.log('🔍 User agent:', navigator.userAgent);
    
    const webhookUrl = 'https://www.dailyjokenewsletter.com/webhook/d0461907-892e-4fd8-aa22-fa5d74e82fc8';
    
    try {
      // Approach 1: no-cors mode with form data
      console.log('📋 Attempt 1: no-cors mode with form data');
      const formData = new URLSearchParams({
        message: messageText,
        sender: 'user',
        timestamp: new Date().toISOString()
      });
      
      console.log('🔗 Webhook URL:', webhookUrl);
      console.log('📤 Form data:', formData.toString());
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
      });

      console.log('📡 Response received (no-cors):', {
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        ok: response.ok
      });

      // With no-cors, we can't read the response, so assume success
      const botMessage: Message = {
        id: Date.now() + 1,
        text: "Nachricht wurde an n8n gesendet (no-cors Modus). Prüfe die n8n Logs für die Antwort.",
        sender: 'bot',
        timestamp: new Date()
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
      
    } catch (error) {
      console.error('💥 no-cors attempt failed:', error);
      
      // Approach 2: Try as simple GET request with query params
      try {
        console.log('📋 Attempt 2: GET request with query params');
        const queryParams = new URLSearchParams({
          message: messageText,
          sender: 'user',
          timestamp: new Date().toISOString()
        });
        
        const getUrl = `${webhookUrl}?${queryParams}`;
        console.log('🔗 GET URL:', getUrl);
        
        const getResponse = await fetch(getUrl, {
          method: 'GET',
          mode: 'no-cors'
        });
        
        console.log('📡 GET Response:', {
          status: getResponse.status,
          type: getResponse.type
        });
        
        const botMessage: Message = {
          id: Date.now() + 1,
          text: "GET-Request wurde versucht. Prüfe n8n Logs.",
          sender: 'bot',
          timestamp: new Date()
        };

        setIsTyping(false);
        setMessages(prev => [...prev, botMessage]);
        
      } catch (getError) {
        console.error('💥 GET attempt also failed:', getError);
        
        // Final fallback
        const botMessage: Message = {
          id: Date.now() + 1,
          text: `Alle Webhook-Versuche fehlgeschlagen. Error: ${error.message}. GET Error: ${getError.message}. CORS-Problem bestätigt.`,
          sender: 'bot',
          timestamp: new Date()
        };

        setIsTyping(false);
        setMessages(prev => [...prev, botMessage]);
      }
    }
  };

  const sendTestMessage = async () => {
    const testMessage = "I am Lovable - automatic test message";
    
    const userMessage: Message = {
      id: Date.now(),
      text: testMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    await sendWebhookMessage(testMessage);
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