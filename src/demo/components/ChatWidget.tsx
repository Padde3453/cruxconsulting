import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

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
  const [chatSize, setChatSize] = useState({ width: 380, height: 600 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 380, height: 600 });


  const sendWebhookMessage = async (messageText: string) => {
    console.log('Calling webhook with message:', messageText);
    
    try {
      const webhookUrl = `https://chatbot.patrick-033.workers.dev/?message=${encodeURIComponent(messageText)}&sender=${encodeURIComponent(userId)}`;
      console.log('Webhook URL:', webhookUrl);
      
      const response = await fetch(webhookUrl, {
        method: 'GET'
      });

      console.log('Webhook response status:', response.status);

      if (response.ok) {
        const responseData = await response.json();
        console.log('Webhook response JSON:', responseData);
        
        const botMessage: Message = {
          id: Date.now() + 1,
          text: responseData.output || responseData.message || 'Bot response received',
          sender: 'bot',
          timestamp: new Date()
        };

        setIsTyping(false);
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
      
    } catch (error) {
      console.error('Webhook error:', error);
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: `Error: ${error.message}`,
        sender: 'bot',
        timestamp: new Date()
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
    }
  };


  const formatMessage = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    
    const formatLineWithLinks = (line: string) => {
      // URL regex pattern
      const urlRegex = /(https?:\/\/[^\s\)]+)/g;
      const parts = line.split(urlRegex);
      
      return parts.map((part, partIndex) => {
        if (urlRegex.test(part)) {
          return (
            <a 
              key={partIndex} 
              href={part} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline break-all"
            >
              {part}
            </a>
          );
        }
        // Handle bold text
        const formattedPart = part.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return <span key={partIndex} dangerouslySetInnerHTML={{ __html: formattedPart }} />;
      });
    };
    
    lines.forEach((line, index) => {
      if (line.trim() === '') {
        elements.push(<br key={index} />);
        return;
      }
      
      // Handle bullet points
      if (line.trim().startsWith('- ')) {
        const content = line.trim().substring(2);
        elements.push(
          <div key={index} className="flex items-start gap-2 my-1">
            <span className="text-orange-500 mt-1">•</span>
            <div className="flex-1 break-words">
              {formatLineWithLinks(content)}
            </div>
          </div>
        );
      } else {
        // Handle regular content with links
        elements.push(
          <div key={index} className="mb-2 break-words">
            {formatLineWithLinks(line)}
          </div>
        );
      }
    });
    
    return <div className="space-y-1">{elements}</div>;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-open chat after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

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

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: chatSize.width,
      height: chatSize.height
    });
  };

  const handleResizeMove = (e: MouseEvent) => {
    if (!isResizing) return;
    
    const deltaX = e.clientX - resizeStart.x;
    const deltaY = e.clientY - resizeStart.y;
    
    const newWidth = Math.max(320, Math.min(600, resizeStart.width - deltaX));
    const newHeight = Math.max(400, Math.min(800, resizeStart.height + deltaY));
    
    setChatSize({ width: newWidth, height: newHeight });
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleResizeMove);
      document.addEventListener('mouseup', handleResizeEnd);
      document.body.style.cursor = 'nw-resize';
    } else {
      document.removeEventListener('mousemove', handleResizeMove);
      document.removeEventListener('mouseup', handleResizeEnd);
      document.body.style.cursor = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleResizeMove);
      document.removeEventListener('mouseup', handleResizeEnd);
      document.body.style.cursor = '';
    };
  }, [isResizing, resizeStart]);

  return (
    <div className="chat-widget">
      {isOpen && (
        <div 
          className="chat-window-resizable"
          style={{ width: chatSize.width, height: chatSize.height }}
        >
          <div className="chat-window">
            <div className="chat-header relative">
              {/* Resize handle in top left corner */}
              <div 
                className="absolute left-2 top-2 z-10 w-4 h-4 bg-transparent hover:bg-white/20 rounded cursor-nw-resize flex items-center justify-center"
                onMouseDown={handleResizeStart}
              >
                <GripVertical className="h-3 w-3 text-white rotate-45" />
              </div>
              
              <div className="flex items-center gap-2 ml-8">
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
                  {message.sender === 'bot' ? formatMessage(message.text) : message.text}
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