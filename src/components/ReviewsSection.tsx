import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { REVIEWS } from '../data/cafeData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const review = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-[#151515] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6F4E37]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#D4A373]/20 border border-[#D4A373]/40 text-[#D4A373] text-xs font-bold uppercase tracking-widest"
          >
            Love From Our Guests
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-5xl text-[#FFF8F2] tracking-tight"
          >
            What Our <span className="text-[#D4A373]">Customers Say</span>
          </motion.h2>

          <p className="text-sm sm:text-base text-gray-400">
            Over 10,000+ happy patrons love our coffee, artisanal toasts, and relaxing vibe.
          </p>
        </div>

        {/* Testimonial Slider Card */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1F1F1F] rounded-3xl p-8 sm:p-12 border border-[#D4A373]/30 shadow-2xl relative"
            >
              <Quote className="absolute top-6 right-8 w-16 h-16 text-[#D4A373]/10" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#D4A373] shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-[#6F4E37] text-[#D4A373] shadow">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-4">
                  {/* Rating Stars */}
                  <div className="flex justify-center sm:justify-start text-amber-400 gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-base sm:text-lg text-gray-200 italic leading-relaxed">
                    "{review.comment}"
                  </p>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="font-heading font-bold text-lg text-white">{review.name}</h4>
                      <p className="text-xs text-[#D4A373] font-medium">{review.role}</p>
                    </div>

                    {review.favoriteItem && (
                      <span className="px-3 py-1 rounded-full bg-[#6F4E37]/40 text-xs text-gray-300 border border-[#D4A373]/30">
                        Favorite: <strong className="text-white">{review.favoriteItem}</strong>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#1F1F1F] border border-[#D4A373]/30 text-[#D4A373] hover:bg-[#D4A373] hover:text-[#151515] transition-colors shadow-lg"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slider Dots */}
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === currentIndex ? 'w-8 bg-[#D4A373]' : 'w-2.5 bg-gray-600'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#1F1F1F] border border-[#D4A373]/30 text-[#D4A373] hover:bg-[#D4A373] hover:text-[#151515] transition-colors shadow-lg"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
