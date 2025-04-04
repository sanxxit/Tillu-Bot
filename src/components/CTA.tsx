
import React from 'react';
import { Button } from '@/components/ui/button';
import { Send, Bot } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-finance-dark via-whatsapp to-whatsapp-light text-white">
      <div className="container px-4 mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Bot className="h-12 w-12 text-white animate-bounce" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet TilluBot – Your WhatsApp Expense Buddy 💸💬</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Join thousands of users who have revolutionized their personal finance management with TilluBot, your cute AI companion that lives in your WhatsApp chat.
        </p>
        <Button size="lg" className="bg-white text-whatsapp hover:bg-gray-100 transition-colors">
          Chat with TilluBot <Send className="ml-2 h-5 w-5" />
        </Button>
        <p className="mt-6 text-sm text-white/80">
          No credit card required. No apps to download. Just pure simplicity.
        </p>
      </div>
    </section>
  );
};

export default CTA;
