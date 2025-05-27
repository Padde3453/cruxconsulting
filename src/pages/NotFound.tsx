
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, ArrowLeft, Home, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingElements from "@/components/FloatingElements";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      <FloatingElements />
      
      <Header />

      {/* 404 Content */}
      <section className="pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-2xl p-12 backdrop-blur-sm">
            <h1 className="text-8xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Oops! Page not found
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/">
                <Button className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-3 flex items-center space-x-2 transition-all duration-300 transform hover:scale-105">
                  <Home size={20} />
                  <span>Return to Home</span>
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                onClick={() => window.history.back()} 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-full px-8 py-3 flex items-center space-x-2"
              >
                <ArrowLeft size={20} />
                <span>Go Back</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
