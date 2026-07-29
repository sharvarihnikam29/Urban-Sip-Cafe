import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Coffee, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'coffee' | 'interior' | 'food' | 'customers'>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filteredGallery = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-[#FFF8F2] dark:bg-[#151515] transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#6F4E37]/10 dark:bg-[#6F4E37]/30 text-[#6F4E37] dark:text-[#D4A373] text-xs font-bold uppercase tracking-widest border border-[#D4A373]/30"
          >
            Visual Moments
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-5xl text-[#151515] dark:text-[#FFF8F2] tracking-tight"
          >
            Urban Sip <span className="text-[#C87E32]">Gallery</span>
          </motion.h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Immerse yourself in our cozy coffee lounge, artisan pour-overs, mouth-watering food & happy moments.
          </p>

          {/* Gallery Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'coffee', label: 'Artisan Coffee' },
              { id: 'interior', label: 'Cozy Interior' },
              { id: 'food', label: 'Gourmet Food' },
              { id: 'customers', label: 'Happy Guests' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#6F4E37] text-white shadow-md'
                    : 'bg-white dark:bg-[#1F1F1F] text-gray-700 dark:text-gray-300 border border-[#D4A373]/20 hover:border-[#D4A373]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Gallery */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveImage(item)}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-[#D4A373]/20 bg-black/40"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] text-[#D4A373] uppercase font-bold tracking-widest">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                <p className="text-xs text-gray-300 mt-1 line-clamp-2">{item.caption}</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-[#D4A373] font-semibold">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-[#1F1F1F] rounded-3xl overflow-hidden border border-[#D4A373]/40 shadow-2xl"
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] bg-black flex items-center justify-center">
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 text-white bg-[#1F1F1F]">
                <span className="text-xs text-[#D4A373] uppercase font-bold tracking-wider">
                  {activeImage.category}
                </span>
                <h3 className="font-heading font-bold text-2xl mt-1">{activeImage.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{activeImage.caption}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
