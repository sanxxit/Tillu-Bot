
import React from 'react';
import { MessageSquare, Database, BotIcon, BarChart } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="h-12 w-12 text-white p-2 bg-whatsapp rounded-full" />,
    title: "Send a Message",
    description: "Simply send expense details via text ('Spent ₹200 on groceries') or forward a receipt photo to the WhatsApp number."
  },
  {
    icon: <BotIcon className="h-12 w-12 text-white p-2 bg-finance rounded-full" />,
    title: "AI Processing",
    description: "Our AI extracts expense details, categorizes the spending, and prepares it for storage."
  },
  {
    icon: <Database className="h-12 w-12 text-white p-2 bg-whatsapp-dark rounded-full" />,
    title: "Secure Storage",
    description: "Your expense data is securely stored and organized for easy retrieval and analysis."
  },
  {
    icon: <BarChart className="h-12 w-12 text-white p-2 bg-finance-dark rounded-full" />,
    title: "Insights & Alerts",
    description: "Ask questions, request reports, or set up alerts to stay on top of your finances."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">How It Works</h2>
        <p className="section-subheading">
          ExpenseBot uses advanced AI to make expense tracking simple through these four steps.
        </p>
        
        <div className="relative max-w-4xl mx-auto mt-16">
          {/* Connecting line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gray-300 hidden md:block"></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative z-10 mb-6">
                  {step.icon}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gray-100 text-whatsapp-dark flex items-center justify-center font-bold text-sm border-2 border-whatsapp">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
