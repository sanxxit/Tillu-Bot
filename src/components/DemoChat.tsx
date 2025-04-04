
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Camera, Mic, Bot } from 'lucide-react';

// Define the message structure
type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

// Sample conversation script that demonstrates the bot's capabilities
const sampleConversation: Message[] = [
  {
    id: 1,
    text: "Hi! I'm TilluBot, your cute expense buddy! 🤖💰 I'll help you track expenses, create budgets, and provide financial insights. Try sending a message like 'Spent ₹200 on groceries'!",
    sender: 'bot',
    timestamp: new Date(Date.now() - 60000 * 10)
  }
];

// Predefined bot responses
const botResponses: Record<string, string> = {
  'spent ₹200 on groceries': "✅ Recorded: ₹200 for Groceries on Apr 4, 2025. Your grocery spending this month is now ₹4,200 out of your ₹6,000 budget.",
  'spent ₹1500 on dinner': "✅ Recorded: ₹1,500 for Dining on Apr 4, 2025. Your dining spending this month is now ₹3,800 out of your ₹5,000 budget.",
  'how much did i spend on food this month': "📊 Food Spending (April 2025):\n\nGroceries: ₹4,200\nDining: ₹3,800\nFood Delivery: ₹2,300\n-----------------\nTotal: ₹10,300\n\nThis is 25% more than last month.",
  'send me a csv of my expenses': "📋 Here's your expense report for April 2025. I've attached a CSV file with all transactions categorized and dated.",
  'alert me if i cross ₹5000 on swiggy this month': "⚠️ Alert set: I'll notify you if your Swiggy spending exceeds ₹5,000 this month. Current spending: ₹2,300.",
  'what are my top spending categories': "📈 Your Top Categories (April 2025):\n\n1. Housing: ₹25,000 (40%)\n2. Food: ₹10,300 (16%)\n3. Transportation: ₹6,200 (10%)\n4. Entertainment: ₹4,800 (8%)\n5. Shopping: ₹3,500 (6%)",
  'help': "I can help you with:\n\n• Record expenses (e.g., 'Spent ₹200 on groceries')\n• Send receipt photos for automatic logging\n• Get spending insights (e.g., 'How much did I spend on food?')\n• Request reports (e.g., 'Send me a CSV')\n• Set alerts (e.g., 'Alert me if I cross ₹5000 on Swiggy')\n\nWhat would you like to do?",
};

const DemoChat = () => {
  const [messages, setMessages] = useState<Message[]>(sampleConversation);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle sending a new message
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    
    // Simulate bot response after typing delay
    setTimeout(() => {
      const lowerCaseMsg = newMessage.toLowerCase();
      let responseText = '';
      
      // Find matching response or use default
      for (const key in botResponses) {
        if (lowerCaseMsg.includes(key)) {
          responseText = botResponses[key];
          break;
        }
      }
      
      if (!responseText) {
        responseText = "I understand you want to track that expense. Could you please provide more details like amount and category? For example: 'Spent ₹200 on groceries'";
      }
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">See TilluBot In Action</h2>
        <p className="section-subheading">
          Try the interactive demo to see how easily you can track expenses with your cute expense buddy.
        </p>
        
        <div className="max-w-md mx-auto border rounded-xl shadow-lg overflow-hidden bg-gray-100">
          {/* Chat header */}
          <div className="bg-whatsapp p-3 text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">TilluBot 💸</h3>
              <p className="text-xs opacity-80">Online</p>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="h-96 overflow-y-auto p-4 bg-[url('https://i.pinimg.com/originals/97/c0/07/97c00759d25d71ebeacc81b4a3e1a51b.jpg')] bg-repeat">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div 
                  className={message.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}
                  style={{ animationDelay: `${message.id * 0.2}s` }}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
                <span className="text-xs text-gray-500 mt-1 mx-2">{formatTime(message.timestamp)}</span>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start mb-4">
                <div className="chat-bubble-bot">
                  <p className="text-gray-600">typing...</p>
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>
          
          {/* Message input */}
          <form onSubmit={handleSubmit} className="p-3 bg-white flex items-center gap-2">
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="text-gray-500 hover:text-whatsapp transition-colors"
            >
              <Camera className="h-5 w-5" />
            </Button>
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message to TilluBot..."
              className="flex-1 bg-gray-100 border-0 focus-visible:ring-whatsapp"
            />
            <Button 
              type="submit" 
              size="icon" 
              className="bg-whatsapp hover:bg-whatsapp-dark transition-colors"
              disabled={!newMessage.trim()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Try these example messages with TilluBot:</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setNewMessage("Spent ₹200 on groceries")}
              className="text-sm"
            >
              Spent ₹200 on groceries
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setNewMessage("How much did I spend on food this month?")}
              className="text-sm"
            >
              How much did I spend on food this month?
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setNewMessage("Send me a CSV of my expenses")}
              className="text-sm"
            >
              Send me a CSV of my expenses
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setNewMessage("Alert me if I cross ₹5000 on Swiggy this month")}
              className="text-sm"
            >
              Alert me if I cross ₹5000 on Swiggy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoChat;
