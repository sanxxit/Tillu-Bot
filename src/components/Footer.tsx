
import React from 'react';
import { Send, Bot } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="h-6 w-6 text-whatsapp" />
              <h2 className="text-xl font-bold">TilluBot</h2>
              <span className="text-xs bg-whatsapp/20 text-whatsapp px-2 py-1 rounded-full">💸💬</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your cute AI accountant in WhatsApp. Track expenses, get insights, and manage your finances effortlessly with your expense buddy.
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} TilluBot. All rights reserved.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-whatsapp transition-colors">Features</a></li>
                <li><a href="#demo" className="text-gray-400 hover:text-whatsapp transition-colors">Demo</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-whatsapp transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-whatsapp transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-whatsapp transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-whatsapp transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-whatsapp transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-whatsapp transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-whatsapp transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-whatsapp transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-whatsapp transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-whatsapp transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
