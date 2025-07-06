import React, { useState, useEffect } from 'react';
import { Star, Shield, Truck, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ChatWidget from '../components/ChatWidget';
import DemoControls from '../components/DemoControls';
import '../styles/demo.css';

// Sample product data based on Bandwerk
const featuredProducts = [
  {
    id: 1,
    name: 'Titanium Band G1-T',
    price: 389,
    rating: 4.9,
    reviews: 92,
    image: '/lovable-uploads/d16b31db-483d-4b20-ada8-7a255c2ec5b5.png',
    badge: 'NEW IN',
    colors: ['Natural Titanium', 'Titanium Black', 'Titanium Gold']
  },
  {
    id: 2,
    name: 'Swiss Vintage Band',
    price: 139,
    rating: 4.9,
    reviews: 904,
    image: '/lovable-uploads/e1b261ac-11fc-46a6-b20a-d6c57514756e.png',
    badge: 'NEW IN',
    colors: ['Tan', 'Dark Brown', 'Black']
  },
  {
    id: 3,
    name: 'Sport Leather Band',
    price: 75,
    rating: 4.8,
    reviews: 171,
    image: '/lovable-uploads/f49642b4-2233-452a-b1ef-2fdf2c83db44.png',
    badge: 'POPULAR',
    colors: ['Orange Pop', 'Chocolate', 'Black Forest']
  }
];

const BandwerkDemo: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleChatMessage = (message: string) => {
    setChatMessages(prev => [...prev, message]);
    // Here you would typically send to your webhook
    console.log('Webhook message:', message);
  };

  const resetDemo = () => {
    setChatMessages([]);
  };

  const triggerBotResponse = () => {
    // Simulate a bot response trigger
    console.log('Triggering bot response...');
  };

  return (
    <div className="demo-page min-h-screen bg-white">
      <DemoControls 
        onReset={resetDemo}
        onTriggerResponse={triggerBotResponse}
        demoType="bandwerk"
      />

      {/* Hero Section */}
      <section className="w-full overflow-hidden">
        <img 
          src="/lovable-uploads/256c2429-8471-4a73-9340-35342f45ccd2.png"
          alt="Bandwerk Hero Section"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Collections Section */}
      <section className="w-full overflow-hidden">
        <img 
          src="/lovable-uploads/82d78955-e8df-42c3-8dfe-d8759c8b25a0.png"
          alt="Bandwerk Collections"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Products Section */}
      <section className="w-full overflow-hidden">
        <img 
          src="/lovable-uploads/56851117-88d4-4c73-8f09-e635f39c1f7c.png"
          alt="Bandwerk Products"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Chat Widget */}
      <ChatWidget onSendMessage={handleChatMessage} demoMode={true} />
    </div>
  );
};

export default BandwerkDemo;