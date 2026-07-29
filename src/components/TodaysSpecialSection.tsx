import React from 'react';
import { motion } from 'motion/react';
import { Tag, Copy, Check, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { OFFERS } from '../data/cafeData';
import { Offer } from '../types';

interface TodaysSpecialSectionProps {
  onClaimOffer: (offer: Offer) => void;
  showToast: (title: string, message: string) => void;
}

export const TodaysSpecialSection: React.FC<TodaysSpecialSectionProps> = ({ onClaimOffer, showToast }) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    showToast('Promo Code Copied!', `Use code "${code}" at checkout for instant savings.`);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <section id="specials" className="py-24 bg-[#151515] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C87E32]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6F4E37]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A373]/20 border border-[#D4A373]/40 text-[#D4A373] text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Limited Time Offers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-5xl text-[#FFF8F2] tracking-tight"
          >
            Today's <span className="text-[#D4A373]">Special Deals</span>
          </motion.h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Indulge in our exclusive cafe combos and special discount codes carefully curated for coffee lovers & students.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFERS.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1F1F1F] rounded-3xl overflow-hidden border border-[#D4A373]/30 shadow-2xl flex flex-col sm:flex-row group hover:border-[#D4A373] transition-all duration-300"
            >
              {/* Offer Image */}
              <div className="sm:w-2/5 relative h-52 sm:h-auto overflow-hidden bg-black/40">
                <img
                  src={offer.image}
                  alt={offer.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-transparent to-transparent" />

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C87E32] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg">
                  {offer.badge}
                </span>
              </div>

              {/* Offer Info */}
              <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-[#D4A373] text-xs font-bold uppercase tracking-wider mb-1">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{offer.discount}</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white">
                    {offer.title}
                  </h3>

                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <Clock className="w-3.5 h-3.5 text-[#D4A373]" />
                    <span>Valid: {offer.validUntil}</span>
                  </div>

                  {/* Promo Code Copy Bar & Claim Button */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 px-3 py-2 rounded-xl bg-black/50 border border-dashed border-[#D4A373]/50 flex items-center justify-between text-xs font-mono text-[#D4A373]">
                      <span>CODE: <strong>{offer.code}</strong></span>
                      <button
                        onClick={() => handleCopy(offer.code)}
                        className="text-gray-300 hover:text-white transition-colors p-1"
                        aria-label="Copy code"
                      >
                        {copiedCode === offer.code ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <button
                      onClick={() => onClaimOffer(offer)}
                      className="px-4 py-2 rounded-xl bg-[#6F4E37] hover:bg-[#C87E32] text-white text-xs font-bold transition-all flex items-center gap-1 shadow-md"
                    >
                      <span>Claim</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
