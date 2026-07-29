import React, { useState } from 'react';
import { Coffee, Instagram, Facebook, Phone, Send, Heart, MapPin, User } from 'lucide-react';
import { PageType } from '../types';
import { CONTACT_INFO } from '../data/cafeData';

interface FooterProps {
  showToast: (title: string, message: string) => void;
  onNavigate?: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ showToast, onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    showToast('Subscribed!', 'Thank you for subscribing to Urban Sip Cafe newsletter.');
    setEmail('');
  };

  const nav = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-[#0F0F0F] text-gray-300 pt-16 pb-12 border-t border-[#D4A373]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => nav('home')} className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6F4E37] to-[#C87E32] flex items-center justify-center text-white shadow-lg">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white flex items-center gap-1">
                  URBAN <span className="text-[#D4A373]">SIP</span>
                </span>
                <span className="block text-[10px] tracking-widest text-[#D4A373] uppercase font-medium -mt-1">
                  CAFE • PUNE
                </span>
              </div>
            </button>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Pune's premier modern artisanal café serving single-origin coffees, thick frappes, crispy momos, and gourmet burgers in a warm, luxurious atmosphere. Founded by <strong className="text-[#D4A373]">{CONTACT_INFO.founder}</strong>.
            </p>

            <div className="text-xs text-gray-400 flex items-center gap-2 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>{CONTACT_INFO.address}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1F1F1F] border border-[#D4A373]/30 text-gray-300 hover:text-[#D4A373] hover:border-[#D4A373] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1F1F1F] border border-[#D4A373]/30 text-gray-300 hover:text-[#D4A373] hover:border-[#D4A373] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1F1F1F] border border-[#D4A373]/30 text-gray-300 hover:text-[#D4A373] hover:border-[#D4A373] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#D4A373]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => nav('home')} className="hover:text-[#D4A373] transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => nav('about')} className="hover:text-[#D4A373] transition-colors cursor-pointer">About Us</button></li>
              <li><button onClick={() => nav('menu')} className="hover:text-[#D4A373] transition-colors cursor-pointer">Our Menu</button></li>
              <li><button onClick={() => nav('special')} className="hover:text-[#D4A373] transition-colors cursor-pointer">Today's Deals</button></li>
              <li><button onClick={() => nav('gallery')} className="hover:text-[#D4A373] transition-colors cursor-pointer">Photo Gallery</button></li>
              <li><button onClick={() => nav('reviews')} className="hover:text-[#D4A373] transition-colors cursor-pointer">Patron Reviews</button></li>
              <li><button onClick={() => nav('reservation')} className="hover:text-[#D4A373] transition-colors cursor-pointer">Table Reservation</button></li>
              <li><button onClick={() => nav('contact')} className="hover:text-[#D4A373] transition-colors cursor-pointer">Contact & Location</button></li>
            </ul>
          </div>

          {/* Col 3: Menu Categories */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#D4A373]">
              Popular Menu
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => nav('menu')} className="hover:text-[#D4A373] transition-colors cursor-pointer">Artisanal Hot Beverages</button></li>
              <li><button onClick={() => nav('menu')} className="hover:text-[#D4A373] transition-colors cursor-pointer">Thick Milkshakes & Frappes</button></li>
              <li><button onClick={() => nav('menu')} className="hover:text-[#D4A373] transition-colors cursor-pointer">Crispy Fried Momos</button></li>
              <li><button onClick={() => nav('menu')} className="hover:text-[#D4A373] transition-colors cursor-pointer">Cheese Peri Peri Maggi</button></li>
              <li><button onClick={() => nav('menu')} className="hover:text-[#D4A373] transition-colors cursor-pointer">Gourmet Tower Burgers</button></li>
              <li><button onClick={() => nav('menu')} className="hover:text-[#D4A373] transition-colors cursor-pointer">Tandoori Paneer Pizza</button></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#D4A373]">
              Stay Connected
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe to receive secret discount codes, secret menu releases & event invites.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-[#1F1F1F] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C87E32]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#6F4E37] text-white hover:bg-[#C87E32] transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Urban Sip Cafe. Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" /> in India.
          </p>

          <div className="flex items-center gap-6">
            <span>{CONTACT_INFO.shortAddress}</span>
            <span>•</span>
            <button onClick={() => nav('home')} className="hover:text-[#D4A373] transition-colors">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => nav('home')} className="hover:text-[#D4A373] transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
