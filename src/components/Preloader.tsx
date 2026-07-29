import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee } from 'lucide-react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#151515] text-[#FFF8F2]"
        >
          {/* Coffee Steam Animated Ring */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-28 h-28 rounded-full border-2 border-t-[#D4A373] border-r-transparent border-b-[#6F4E37] border-l-transparent"
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.9, 1.1, 1], opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
              className="absolute p-4 rounded-full bg-[#6F4E37]/30 border border-[#D4A373]/40"
            >
              <Coffee className="w-10 h-10 text-[#D4A373]" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <h1 className="font-heading text-2xl font-bold tracking-wider text-[#D4A373]">
              URBAN SIP CAFE
            </h1>
            <p className="text-xs tracking-widest text-gray-400 uppercase mt-1">
              Brewing Fresh Artisanal Moments...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
