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
    <div className="demo-page min-h-screen bg-gray-50">
      <DemoControls 
        onReset={resetDemo}
        onTriggerResponse={triggerBotResponse}
        demoType="bandwerk"
      />

      {/* Orange Header Bar */}
      <div className="bg-orange-500 text-white text-center py-2 text-sm">
        🚚 KOSTENLOSER VERSAND AB 60€ IM NETZ – 🔄 30 TAGE RÜCKGABERECHT
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider text-black">BANDWERK</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-gray-600 text-sm font-medium">APPLE WATCH BÄNDER</a>
            <a href="#" className="hover:text-gray-600 text-sm font-medium">IPHONE HÜLLEN</a>
            <a href="#" className="hover:text-gray-600 text-sm font-medium">LADEGERÄTE</a>
            <a href="#" className="hover:text-gray-600 text-sm font-medium">SONDEREDITIONEN</a>
            <a href="#" className="hover:text-gray-600 text-sm font-medium">10 JAHRE BANDWERK🥳</a>
          </nav>
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-gray-600">De/En</span>
            <span className="text-gray-600">🇩🇪 DE (EUR €)</span>
            <div className="flex space-x-2">
              <button className="p-2">🔍</button>
              <button className="p-2">👤</button>
              <button className="p-2">🛒</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" 
               style={{backgroundImage: `url('/lovable-uploads/256c2429-8471-4a73-9340-35342f45ccd2.png')`}}>
        <div className="absolute inset-0 bg-black bg-opacity-30">
          <div className="max-w-7xl mx-auto h-full flex items-center px-6">
            <div className="text-white max-w-lg">
              <p className="text-sm font-medium mb-4 tracking-wide">LIMITIERTE SEAQUAL BÄNDER VERFÜGBAR</p>
              <h1 className="text-6xl font-bold mb-4">Tag des Meeres</h1>
              <p className="text-2xl mb-8">Bis zu -50% auf wasserfeste Bänder</p>
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full flex items-center gap-2">
                Zu den Angeboten
                <span>→</span>
              </Button>
            </div>
            
            {/* SeaQual Badge */}
            <div className="absolute top-20 right-20 bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <div className="text-center text-xs font-medium text-blue-600">
                <div>SEAQUAL</div>
                <div>YARN</div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30">
            ←
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30">
            →
          </button>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2">30 Day Money Back Guarantee</h3>
              <p className="text-gray-600 text-sm">Risk-free purchase with full refund</p>
            </div>
            <div className="flex flex-col items-center">
              <HeartHandshake className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Fast & Dedicated Customer Service</h3>
              <p className="text-gray-600 text-sm">Quick support when you need it</p>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="font-semibold mb-2">Free Shipping from 70€</h3>
              <p className="text-gray-600 text-sm">Complimentary delivery on larger orders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Products</h2>
            <p className="text-gray-600">Discover our best-selling premium watch bands</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="bandwerk-product-card overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white text-xs px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold mb-4">${product.price}.00 USD</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.colors.map((color, index) => (
                      <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {color}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            We celebrate 10 years of Bandwerk
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Buy 2 bands and get 2 more for free!
          </p>
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium">
            Discover All Offers
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">BANDWERK</h3>
              <p className="text-gray-400 text-sm">
                Premium watch bands and accessories crafted with precision and style.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Apple Watch Bands</a></li>
                <li><a href="#" className="hover:text-white">iPhone Cases</a></li>
                <li><a href="#" className="hover:text-white">Special Editions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget onSendMessage={handleChatMessage} demoMode={true} />
    </div>
  );
};

export default BandwerkDemo;