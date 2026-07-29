import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, Heart, Star, Clock, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

interface QuickViewModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, customization?: any) => void;
  onToggleWishlist: (item: MenuItem) => void;
  isWishlisted: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  item,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedMilk, setSelectedMilk] = useState('Whole Milk');
  const [selectedSugar, setSelectedSugar] = useState('Normal');
  const [extraCheese, setExtraCheese] = useState(false);
  const [extraShot, setExtraShot] = useState(false);
  const [notes, setNotes] = useState('');

  const isBeverage = item.type === 'beverage';

  // Calculate customized total price
  let itemPrice = item.price;
  if (selectedMilk !== 'Whole Milk' && isBeverage) itemPrice += 20;
  if (extraShot && isBeverage) itemPrice += 30;
  if (extraCheese && !isBeverage) itemPrice += 25;

  const totalPrice = itemPrice * quantity;

  const handleAdd = () => {
    onAddToCart(item, quantity, {
      milk: isBeverage ? selectedMilk : undefined,
      sugar: isBeverage ? selectedSugar : undefined,
      extraCheese: !isBeverage ? extraCheese : undefined,
      extraShot: isBeverage ? extraShot : undefined,
      notes: notes.trim() || undefined
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white dark:bg-[#1F1F1F] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#D4A373]/30 relative text-[#151515] dark:text-[#FFF8F2]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Header */}
            <div className="relative h-64 md:h-full min-h-[260px] bg-gray-100 dark:bg-black/40">
              <img
                src={item.image}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {item.isBestseller && (
                  <span className="px-2.5 py-1 rounded-full bg-[#C87E32] text-white text-[11px] font-bold uppercase tracking-wider shadow">
                    Bestseller
                  </span>
                )}
                {item.isChefSpecial && (
                  <span className="px-2.5 py-1 rounded-full bg-[#6F4E37] text-white text-[11px] font-bold uppercase tracking-wider shadow">
                    Chef Special
                  </span>
                )}
              </div>

              {/* Favorite Wishlist Icon */}
              <button
                onClick={() => onToggleWishlist(item)}
                className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/90 dark:bg-[#151515]/90 text-red-500 shadow-lg hover:scale-110 transition-transform"
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
              </button>
            </div>

            {/* Content & Options */}
            <div className="p-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Type Indicator Dot */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-sm border flex items-center justify-center p-0.5 border-gray-400">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.type === 'veg'
                            ? 'bg-emerald-600'
                            : item.type === 'non-veg'
                            ? 'bg-red-600'
                            : 'bg-amber-600'
                        }`}
                      />
                    </span>
                    <span className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                      {item.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-[#151515] dark:text-white">
                  {item.name}
                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-200 dark:border-white/10 text-xs text-gray-500 dark:text-gray-400">
                  {item.prepTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4A373]" />
                      <span>Prep: {item.prepTime}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
                    <span>Freshly Prepared</span>
                  </div>
                </div>

                {/* Customizations */}
                <div className="mt-4 space-y-3">
                  {isBeverage ? (
                    <>
                      {/* Milk Selection */}
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">
                          Milk Preference
                        </label>
                        <div className="grid grid-cols-2 gap-1.5 text-xs">
                          {['Whole Milk', 'Oat Milk (+₹20)', 'Almond Milk (+₹20)', 'Skimmed Milk'].map((milk) => (
                            <button
                              key={milk}
                              onClick={() => setSelectedMilk(milk.split(' ')[0])}
                              className={`py-1.5 px-2 rounded-lg border text-left text-xs font-medium transition-colors ${
                                selectedMilk === milk.split(' ')[0]
                                  ? 'border-[#C87E32] bg-[#C87E32]/10 text-[#C87E32] font-bold'
                                  : 'border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300'
                              }`}
                            >
                              {milk}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Extra Shot */}
                      <label className="flex items-center gap-2 text-xs font-medium cursor-pointer pt-1">
                        <input
                          type="checkbox"
                          checked={extraShot}
                          onChange={(e) => setExtraShot(e.target.checked)}
                          className="rounded border-gray-300 text-[#C87E32] focus:ring-[#C87E32]"
                        />
                        <span>Add Extra Espresso Shot (+₹30)</span>
                      </label>
                    </>
                  ) : (
                    <>
                      {/* Extra Cheese for Food */}
                      <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                        <input
                          type="checkbox"
                          checked={extraCheese}
                          onChange={(e) => setExtraCheese(e.target.checked)}
                          className="rounded border-gray-300 text-[#C87E32] focus:ring-[#C87E32]"
                        />
                        <span>Add Extra Melted Cheese (+₹25)</span>
                      </label>
                    </>
                  )}
                </div>
              </div>

              {/* Quantity & Add CTA */}
              <div className="pt-4 border-t border-gray-200 dark:border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 bg-gray-100 dark:bg-black/40 rounded-full p-1 border border-gray-200 dark:border-white/10">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-full bg-white dark:bg-[#151515] flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-[#D4A373] hover:text-white transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-sm px-2">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-full bg-white dark:bg-[#151515] flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-[#D4A373] hover:text-white transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Total Price</span>
                    <span className="font-heading font-extrabold text-2xl text-[#C87E32]">
                      ₹{totalPrice}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#6F4E37] via-[#C87E32] to-[#D4A373] text-white font-bold text-sm shadow-xl hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Order • ₹{totalPrice}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
