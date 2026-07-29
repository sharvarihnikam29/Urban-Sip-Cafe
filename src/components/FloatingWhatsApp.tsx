import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Coffee } from 'lucide-react';
import { CONTACT_INFO } from '../data/cafeData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMsg) return;
    const text = encodeURIComponent(userMsg);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`, '_blank');
    setUserMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 text-white shadow-2xl flex items-center justify-center border-2 border-white relative group"
        aria-label="Contact on WhatsApp"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white animate-ping" />
      </motion.button>

      {/* WhatsApp Chat Popover Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-18 left-0 w-80 bg-[#1F1F1F] text-white rounded-3xl shadow-2xl border border-emerald-500/30 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-emerald-600 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                  <Coffee className="w-5 h-5 text-amber-200" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm">Urban Sip Barista</h4>
                  <p className="text-[10px] text-emerald-100">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close chat">
                <X className="w-4 h-4 text-white/80 hover:text-white" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-3 text-xs bg-[#151515]">
              <div className="bg-[#1F1F1F] p-3 rounded-2xl rounded-tl-none border border-white/10 max-w-[85%] text-gray-200 leading-relaxed">
                👋 Hello! Welcome to <strong>Urban Sip Cafe</strong> {CONTACT_INFO.city}. Want to check table availability or place a fast order?
              </div>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSend} className="p-3 bg-[#1F1F1F] border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                placeholder="Type your WhatsApp query..."
                className="flex-1 px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
