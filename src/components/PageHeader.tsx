import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageType } from '../types';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  badge?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  currentPage,
  onNavigate,
  badge
}) => {
  const getPageLabel = (page: PageType) => {
    switch (page) {
      case 'home': return 'Home';
      case 'about': return 'About Us';
      case 'menu': return 'Our Menu';
      case 'special': return "Today's Specials";
      case 'gallery': return 'Gallery';
      case 'reviews': return 'Reviews';
      case 'reservation': return 'Reservations';
      case 'contact': return 'Contact Us';
      default: return page;
    }
  };

  return (
    <div className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-[#151515] text-[#FFF8F2] overflow-hidden border-b border-[#D4A373]/20">
      {/* Background Decorative Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6F4E37]/30 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C87E32]/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb Navigation */}
        <nav className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-gray-300 mb-6 border border-white/10 shadow-inner">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1.5 hover:text-[#D4A373] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
          <span className="text-[#D4A373] font-semibold">{getPageLabel(currentPage)}</span>
        </nav>

        {/* Badge Optional */}
        {badge && (
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#C87E32]/20 text-[#D4A373] border border-[#C87E32]/40 uppercase tracking-widest">
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-[#FFF8F2]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
