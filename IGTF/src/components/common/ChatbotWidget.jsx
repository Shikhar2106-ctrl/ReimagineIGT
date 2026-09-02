import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! 👋 Welcome to IntelliGreen. How can I assist you with clean air solutions or IAQ monitoring today?',
      time: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    'What is CTFA Fresh Air Purifier?',
    'How does Bipolar Ionisation work?',
    'EAC Electronic Air Cleaner details',
    'How to request an IAQ Audit?',
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    // Append User Message
    const userMsg = { sender: 'user', text: query, time: 'Just now' };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Generate Instant Static Bot Response based on keywords
    setTimeout(() => {
      let botResponse = 'Thank you for reaching out! You can explore our product specifications on the Products page or schedule an IAQ audit on our Contact page.';
      const lower = query.toLowerCase();

      if (lower.includes('ctfa')) {
        botResponse = 'The WALL MOUNTED CTFA is a dual-mode fresh air purifier designed for both HVAC and non-HVAC spaces, featuring HEPA H13 + Carbon filtration.';
      } else if (lower.includes('ionisation') || lower.includes('bipolar') || lower.includes('plasma')) {
        botResponse = 'Our Active Bipolar Ionisation System replicates nature’s air purification model by releasing millions of positive & negative ions to actively kill viruses and mold in real time.';
      } else if (lower.includes('eac') || lower.includes('electronic')) {
        botResponse = 'The EAC Electronic Air Cleaner is CII–IGBC GreenPro Certified, delivering MERV 15+ equivalent filtration at ultra-low pressure drop (<25 Pa) with washable aluminum cells.';
      } else if (lower.includes('sensor') || lower.includes('iaq') || lower.includes('monitor')) {
        botResponse = 'The IAQ Smart Sensor Station features LoRaWAN, Wi-Fi, MODBUS, and AWS Cloud connectivity with real-time mobile alerts for PM2.5, CO2, TVOC, Temp, and RH.';
      } else if (lower.includes('audit') || lower.includes('consultation') || lower.includes('contact') || lower.includes('phone')) {
        botResponse = 'You can reach our CleanTech team at +91-124 425 6862 or +91-99710 02858, or email info@intelligreentech.com. We offer free on-site IAQ audits!';
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse, time: 'Just now' }]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl shadow-emerald-600/30 hover:scale-105 transition-all duration-300 cursor-pointer"
          aria-label="Open AI CleanTech Chatbot"
        >
          {/* Active Status Pulse Badge */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white" />
          </span>

          <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center">
            <Bot size={18} className="text-white group-hover:rotate-12 transition-transform" />
          </div>
          <span className="text-xs font-bold tracking-wide pr-1">CleanTech Assistant</span>
        </button>
      )}

      {/* Floating Chatbot Modal */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[480px] bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden transition-all animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  IntelliGreen Assistant
                  <Sparkles size={13} className="text-emerald-300" />
                </div>
                <div className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online | Instant CleanTech Support
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="h-6 w-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={13} />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-none shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick Prompts */}
            <div className="pt-2 space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Quick Questions</div>
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="text-[10px] font-semibold text-slate-700 bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 px-2.5 py-1 rounded-full shadow-2xs transition-colors text-left cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Call Action Strip */}
          <div className="bg-emerald-50 px-4 py-2 border-t border-emerald-100 flex items-center justify-between text-[11px] text-emerald-900">
            <span className="font-semibold flex items-center gap-1.5">
              <Phone size={12} className="text-emerald-600" />
              Need Urgent Help?
            </span>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="font-bold text-emerald-700 hover:underline flex items-center gap-1">
              Contact Team <ArrowRight size={11} />
            </Link>
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about air purifiers or sensors..."
              className="flex-1 rounded-xl bg-slate-50 border border-slate-300 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={() => handleSend()}
              className="h-8 w-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
