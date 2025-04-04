
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-whatsapp-light via-whatsapp to-finance-dark text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your AI Accountant in WhatsApp
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Track expenses, get insights, and manage your finances - all through simple WhatsApp messages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-whatsapp hover:bg-gray-100 transition-colors">
              Start Tracking <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-colors">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
