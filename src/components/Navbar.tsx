import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Coffee,
  ShoppingBag,
  Heart,
  Search,
  Moon,
  Sun,
  Menu as MenuIcon,
  X,
  CalendarCheck2,
  Phone
} from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onSearchClick: () => void;
  activePage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  isDarkMode,
  onToggleDarkMode,
  onSearchClick,
  activePage,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; page: PageType }[] = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Menu', page: 'menu' },
    { name: 'Specials', page: 'special' },
    { name: 'Gallery', page: 'gallery' },
    { name: 'Reviews', page: 'reviews' },
    { name: 'Reservations', page: 'reservation' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#151515]/95 dark:bg-[#151515]/98 backdrop-blur-md py-3 shadow-xl border-b border-[#D4A373]/20 text-[#FFF8F2]'
          : 'bg-gradient-to-b from-[#151515]/90 via-[#151515]/60 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6F4E37] to-[#C87E32] flex items-center justify-center shadow-lg shadow-[#6F4E37]/40 group-hover:scale-105 transition-transform duration-300">
            <Coffee className="w-5 h-5 text-[#FFF8F2]" />
          </div>
          <div>
            <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-[#FFF8F2] flex items-center gap-1">
              URBAN <span className="text-[#D4A373]">SIP</span>
            </span>
            <span className="block text-[10px] tracking-widest text-[#D4A373] uppercase font-medium -mt-1">
              CAFE • INDIA
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => {
            const isActive = activePage === link.page;
            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.page)}
                className={`text-sm font-medium transition-colors relative py-1 px-2 rounded-md ${
                  isActive
                    ? 'text-[#D4A373] font-bold bg-white/5'
                    : 'text-gray-200 hover:text-[#D4A373]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activePageIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4A373] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions (Search, Wishlist, Cart, Theme, Reserve CTA) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Trigger */}
          <button
            onClick={() => {
              if (activePage !== 'menu') onNavigate('menu');
              onSearchClick();
            }}
            aria-label="Search menu"
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-200 hover:text-[#D4A373]"
            title="Search Menu"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-200 hover:text-[#D4A373]"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            aria-label="Wishlist"
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-200 hover:text-[#D4A373] relative"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C87E32] text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="p-2.5 rounded-full bg-gradient-to-r from-[#6F4E37] to-[#C87E32] text-white hover:brightness-110 transition-all shadow-md flex items-center gap-2 relative"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline text-xs font-semibold">Cart</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#151515] text-[#D4A373] text-[11px] font-bold flex items-center justify-center border border-[#D4A373]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Desktop Table Reservation CTA */}
          <button
            onClick={() => handleLinkClick('reservation')}
            className={`hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-semibold transition-all duration-300 ${
              activePage === 'reservation'
                ? 'bg-[#D4A373] text-[#151515] border-[#D4A373]'
                : 'border-[#D4A373]/60 text-[#D4A373] hover:bg-[#D4A373] hover:text-[#151515]'
            }`}
          >
            <CalendarCheck2 className="w-3.5 h-3.5" />
            <span>Book Table</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-gray-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4A373]" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#151515]/98 border-b border-[#D4A373]/30 px-6 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activePage === link.page;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.page)}
                    className={`text-base font-medium transition-colors py-2 px-3 rounded-lg text-left flex items-center justify-between ${
                      isActive
                        ? 'bg-[#6F4E37]/30 text-[#D4A373] font-bold border-l-4 border-[#D4A373]'
                        : 'text-gray-200 hover:text-[#D4A373] hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-[#D4A373] text-xs">→</span>
                  </button>
                );
              })}

              <div className="pt-3 flex flex-col gap-3 border-t border-white/10 mt-2">
                <button
                  onClick={() => handleLinkClick('reservation')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6F4E37] to-[#C87E32] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <CalendarCheck2 className="w-4 h-4" />
                  <span>Reserve Table Now</span>
                </button>

                <a
                  href="tel:+919876543210"
                  className="w-full py-2.5 rounded-xl border border-white/20 text-gray-300 font-medium text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>Call Us: +91 98765 43210</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
