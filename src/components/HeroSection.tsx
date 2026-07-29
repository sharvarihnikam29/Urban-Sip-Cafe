import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Calendar, Utensils, Star, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface HeroSectionProps {
  onNavigate?: (page: PageType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Overlay with Parallax Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=80"
          alt="Urban Sip Cafe Ambience"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-pulse transition-all duration-1000"
        />
        {/* Dark Luxury Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] via-[#151515]/80 to-[#151515]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#151515]/40 to-[#151515]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6F4E37]/60 border border-[#D4A373]/50 backdrop-blur-md text-[#D4A373] text-xs sm:text-sm font-semibold tracking-wide"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
            <span>India's Finest Modern Artisanal Cafe</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-7xl text-[#FFF8F2] tracking-tight leading-[1.1]"
          >
            Every Sip <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] via-[#C87E32] to-[#FFF8F2]">
              Tells a Story.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl text-gray-300 font-light tracking-wide flex items-center flex-wrap gap-2 sm:gap-3"
          >
            <span className="text-[#D4A373] font-medium">Fresh Coffee</span> •
            <span className="text-[#D4A373] font-medium">Delicious Food</span> •
            <span className="text-[#D4A373] font-medium">Cozy Ambience</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed"
          >
            Step into a sanctuary of freshly roasted Indian specialty beans, handcrafted cold frappes, gourmet momos, and decadent burgers crafted with love.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={() => onNavigate ? onNavigate('menu') : null}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6F4E37] via-[#C87E32] to-[#D4A373] text-white font-semibold text-sm sm:text-base shadow-xl shadow-[#6F4E37]/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              <Coffee className="w-5 h-5 text-amber-200" />
              <span>Order Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate ? onNavigate('reservation') : null}
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#D4A373]/50 text-[#FFF8F2] font-semibold text-sm sm:text-base backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-[#D4A373]" />
              <span>Reserve Table</span>
            </button>

            <button
              onClick={() => onNavigate ? onNavigate('menu') : null}
              className="px-6 py-3.5 rounded-full text-gray-300 hover:text-[#D4A373] text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Menu</span>
            </button>
          </motion.div>

          {/* Floating Hero Badges (Ratings & Reviews) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 flex items-center gap-6 border-t border-white/10 max-w-lg cursor-pointer"
            onClick={() => onNavigate ? onNavigate('reviews') : null}
          >
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold text-sm">4.9 / 5</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <p className="text-xs text-gray-300">
              <strong className="text-[#D4A373]">10,000+</strong> Coffee Lovers Served (Read Reviews)
            </p>
          </motion.div>
        </div>

        {/* Hero Right Visual: Floating Coffee Cup with Steam Micro-Interaction */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center"
          >
            {/* Glowing Backdrop Circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C87E32]/30 via-[#6F4E37]/40 to-transparent blur-3xl animate-pulse" />

            {/* Glassmorphism Card Wrapper */}
            <div className="relative z-10 w-full h-full rounded-3xl p-6 glass-dark border border-[#D4A373]/30 flex flex-col items-center justify-center shadow-2xl shadow-black/80">
              {/* Coffee Cup Graphic with Steam animation */}
              <div className="relative mb-4 flex justify-center">
                {/* Steam Particles */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-2">
                  <div className="w-1.5 h-8 bg-gradient-to-t from-[#D4A373]/60 to-transparent rounded-full animate-steam" />
                  <div className="w-2 h-10 bg-gradient-to-t from-white/60 to-transparent rounded-full animate-steam delay-150" />
                  <div className="w-1.5 h-7 bg-gradient-to-t from-[#D4A373]/60 to-transparent rounded-full animate-steam delay-300" />
                </div>

                {/* Floating Animated Coffee Cup */}
                <div className="animate-float p-6 rounded-full bg-gradient-to-b from-[#6F4E37] to-[#151515] border-2 border-[#D4A373] shadow-2xl">
                  <Coffee className="w-24 h-24 sm:w-32 sm:h-32 text-[#D4A373]" />
                </div>
              </div>

              {/* Card Label */}
              <div className="text-center">
                <span className="px-3 py-1 rounded-full bg-[#C87E32]/20 border border-[#C87E32]/40 text-[#D4A373] text-xs font-semibold uppercase tracking-wider">
                  Signature Roast
                </span>
                <h3 className="font-heading text-lg font-bold text-white mt-2">
                  Double Espresso & Caramel Cloud
                </h3>
                <p className="text-xs text-gray-400 mt-1">Single-origin Chikmagalur 100% Arabica</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <button
        onClick={() => onNavigate ? onNavigate('about') : null}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-gray-400 hover:text-[#D4A373] transition-colors cursor-pointer"
      >
        <span className="text-[10px] tracking-widest uppercase">Explore About Us</span>
        <ChevronDown className="w-4 h-4 text-[#D4A373] animate-bounce" />
      </button>
    </section>
  );
};
