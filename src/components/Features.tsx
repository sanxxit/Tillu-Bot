
import React from 'react';
import { Camera, DollarSign, FileText, BarChart4, Clock, BellRing } from 'lucide-react';

const features = [
  {
    icon: <DollarSign className="h-10 w-10 text-whatsapp mb-4" />,
    title: "Easy Expense Tracking",
    description: "Simply message 'Spent ₹200 on groceries' to log expenses instantly."
  },
  {
    icon: <Camera className="h-10 w-10 text-whatsapp mb-4" />,
    title: "Receipt Scanning",
    description: "Forward photos of receipts and let AI extract all the details automatically."
  },
  {
    icon: <BarChart4 className="h-10 w-10 text-whatsapp mb-4" />,
    title: "Spending Insights",
    description: "Ask questions like 'How much did I spend on food this month?' for instant insights."
  },
  {
    icon: <FileText className="h-10 w-10 text-whatsapp mb-4" />,
    title: "Expense Reports",
    description: "Request CSV exports or summaries of your spending patterns anytime."
  },
  {
    icon: <BellRing className="h-10 w-10 text-whatsapp mb-4" />,
    title: "Spending Alerts",
    description: "Set up custom alerts when you cross spending thresholds in specific categories."
  },
  {
    icon: <Clock className="h-10 w-10 text-whatsapp mb-4" />,
    title: "Zero Setup Time",
    description: "No apps to download. Works instantly in your existing WhatsApp."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">Powerful Features</h2>
        <p className="section-subheading">
          ExpenseBot combines the convenience of WhatsApp with powerful AI to make expense tracking effortless.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="feature-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
