import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { MenuItem } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: MenuItem[];
  onRemoveFromWishlist: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  onAddToCart
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-white dark:bg-[#151515] text-[#151515] dark:text-[#FFF8F2] shadow-2xl flex flex-col justify-between border-l border-[#D4A373]/30"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-red-500/20 text-red-500">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-[#151515] dark:text-white">
                      Your Favorites
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-gray-400 hover:text-[#151515] dark:hover:text-white transition-colors"
                  aria-label="Close wishlist"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="p-6 flex-1 overflow-y-auto space-y-4">
                {wishlistItems.length === 0 ? (
                  <div className="py-16 text-center space-y-3">
                    <Heart className="w-16 h-16 mx-auto text-red-400/40" />
                    <p className="font-heading font-bold text-lg text-gray-500 dark:text-gray-400">
                      No saved favorites yet
                    </p>
                    <p className="text-xs text-gray-400">Click the heart icon on any menu item to save it here!</p>
                  </div>
                ) : (
                  wishlistItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-gray-50 dark:bg-[#1F1F1F] border border-gray-200 dark:border-white/10 flex gap-4 items-center justify-between shadow-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading font-bold text-sm text-[#151515] dark:text-white truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs font-bold text-[#C87E32] mt-0.5">₹{item.price}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            onAddToCart(item, 1);
                            onRemoveFromWishlist(item);
                          }}
                          className="px-3 py-1.5 rounded-full bg-[#6F4E37] text-white text-xs font-semibold hover:bg-[#C87E32] transition-colors flex items-center gap-1"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>

                        <button
                          onClick={() => onRemoveFromWishlist(item)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
