
import React from 'react';
import { Button } from '@/components/ui/button';
import { Send, Bot } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-whatsapp py-4 sticky top-0 z-50 shadow-md">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-white animate-bounce" />
          <h1 className="text-2xl font-bold text-white">TilluBot</h1>
          <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">💸💬</span>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-white hover:text-gray-200 transition-colors">Features</a>
          <a href="#demo" className="text-white hover:text-gray-200 transition-colors">Demo</a>
          <a href="#how-it-works" className="text-white hover:text-gray-200 transition-colors">How It Works</a>
          <Button variant="outline" className="bg-white text-whatsapp hover:bg-gray-100 transition-colors">Get Started</Button>
        </nav>
        <Button variant="outline" className="md:hidden bg-white text-whatsapp hover:bg-gray-100 transition-colors">Menu</Button>
      </div>
    </header>
  );
};

export default Header;
