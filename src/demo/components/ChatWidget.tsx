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
    try {
      // POST request with form-encoded data to avoid CORS preflight
      const formData = new URLSearchParams({
        message: messageText,
        sender: 'user',
        timestamp: new Date().toISOString()
      });
      
      const webhookUrl = 'https://www.dailyjokenewsletter.com/webhook/d0461907-892e-4fd8-aa22-fa5d74e82fc8';
      
      console.log('🔗 Webhook URL:', webhookUrl);
      console.log('📤 Form data:', formData.toString());
      console.log('🚀 Sending POST request with form encoding...');
      console.log('🌐 Current origin:', window.location.origin);
      console.log('🔍 User agent:', navigator.userAgent);
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
      });

      console.log('📡 Response received:', {
        status: response.status,
        statusText: response.statusText,
        headers: Array.from(response.headers.entries())
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Webhook response data:', data);
        
        // Add bot response from webhook
        const botMessage: Message = {
          id: Date.now() + 1,
          text: data.response || data.message || data.reply || data.text || "Danke für deine Nachricht!",
          sender: 'bot',
          timestamp: new Date()
        };

        setIsTyping(false);
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error(`Webhook response failed: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('💥 Webhook error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
        type: typeof error,
        errorObject: error
      });
      
      // Show detailed error to help debug
      const botMessage: Message = {
        id: Date.now() + 1,
        text: `Webhook Fehler: ${error.message}. Domain: ${window.location.origin}. Error type: ${error.name}`,
        sender: 'bot',
        timestamp: new Date()
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
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