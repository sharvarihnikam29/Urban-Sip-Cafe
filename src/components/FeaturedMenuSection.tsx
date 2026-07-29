import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Heart,
  Plus,
  Star,
  Eye,
  SlidersHorizontal,
  Coffee,
  CupSoda,
  Milk,
  Flame,
  Soup,
  UtensilsCrossed,
  Square,
  Popcorn,
  Drumstick,
  Sandwich,
  Beef,
  Crown,
  Pizza as PizzaIcon,
  Sparkles,
  Check
} from 'lucide-react';
import { MENU_ITEMS, CATEGORIES } from '../data/menuData';
import { MenuItem, CategoryId } from '../types';

interface FeaturedMenuSectionProps {
  onAddToCart: (item: MenuItem, quantity: number) => void;
  onToggleWishlist: (item: MenuItem) => void;
  wishlistIds: string[];
  onQuickView: (item: MenuItem) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const FeaturedMenuSection: React.FC<FeaturedMenuSectionProps> = ({
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onQuickView,
  searchQuery,
  setSearchQuery
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high'>('popular');
  const menuRef = useRef<HTMLDivElement>(null);

  // Helper icon mapper for category tabs
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return Coffee;
      case 'CupSoda': return CupSoda;
      case 'Milk': return Milk;
      case 'Flame': return Flame;
      case 'Soup': return Soup;
      case 'UtensilsCrossed': return UtensilsCrossed;
      case 'Square': return Square;
      case 'Popcorn': return Popcorn;
      case 'Drumstick': return Drumstick;
      case 'Sandwich': return Sandwich;
      case 'Beef': return Beef;
      case 'Crown': return Crown;
      case 'Pizza': return PizzaIcon;
      default: return Coffee;
    }
  };

  // Filtered and sorted menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Dietary match
      let matchesDietary = true;
      if (dietaryFilter === 'veg') {
        matchesDietary = item.type === 'veg' || item.type === 'beverage';
      } else if (dietaryFilter === 'non-veg') {
        matchesDietary = item.type === 'non-veg';
      }

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesDietary && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return b.rating - a.rating; // Popularity rating default
    });
  }, [selectedCategory, dietaryFilter, searchQuery, sortBy]);

  return (
    <section id="menu" ref={menuRef} className="py-24 bg-[#FFF8F2] dark:bg-[#151515] transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#6F4E37]/10 dark:bg-[#6F4E37]/30 text-[#6F4E37] dark:text-[#D4A373] text-xs font-bold uppercase tracking-widest border border-[#D4A373]/30"
          >
            Crafted With Love & Passion
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-5xl text-[#151515] dark:text-[#FFF8F2] tracking-tight"
          >
            Explore Our <span className="text-[#C87E32]">Featured Menu</span>
          </motion.h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            From piping hot kulhad chai & single-origin pour-overs to spicy momos, gourmet burgers & cheesy pizzas.
          </p>
        </div>

        {/* Search, Dietary & Sorting Toolbar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coffee, burgers, momos, maggi..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white dark:bg-[#1F1F1F] border border-[#D4A373]/30 text-sm text-[#151515] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#C87E32] shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter & Sort Controls */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              {/* Veg / Non Veg Pill Switch */}
              <div className="flex items-center bg-white dark:bg-[#1F1F1F] rounded-full p-1 border border-[#D4A373]/30 text-xs font-semibold">
                <button
                  onClick={() => setDietaryFilter('all')}
                  className={`px-3 py-1.5 rounded-full transition-all ${
                    dietaryFilter === 'all'
                      ? 'bg-[#6F4E37] text-white shadow'
                      : 'text-gray-600 dark:text-gray-300 hover:text-[#C87E32]'
                  }`}
                >
                  All Items
                </button>
                <button
                  onClick={() => setDietaryFilter('veg')}
                  className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                    dietaryFilter === 'veg'
                      ? 'bg-emerald-700 text-white shadow'
                      : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  <span>Veg Only</span>
                </button>
                <button
                  onClick={() => setDietaryFilter('non-veg')}
                  className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                    dietaryFilter === 'non-veg'
                      ? 'bg-red-700 text-white shadow'
                      : 'text-gray-600 dark:text-gray-300 hover:text-red-600'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                  <span>Non-Veg</span>
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-300">
                <SlidersHorizontal className="w-4 h-4 text-[#D4A373]" />
                <select
                  value={sortBy}
                  onChange={(e: any) => setSortBy(e.target.value)}
                  className="bg-white dark:bg-[#1F1F1F] border border-[#D4A373]/30 rounded-full px-3 py-2 text-xs text-[#151515] dark:text-white focus:outline-none cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs Scrollable List */}
          <div className="overflow-x-auto no-scrollbar py-3 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-2.5 min-w-max">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-[#6F4E37] to-[#C87E32] text-white shadow-lg shadow-[#6F4E37]/30 scale-105'
                    : 'bg-white dark:bg-[#1F1F1F] text-gray-700 dark:text-gray-300 border border-[#D4A373]/20 hover:border-[#D4A373]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>All Categories ({MENU_ITEMS.length})</span>
              </button>

              {CATEGORIES.map((cat) => {
                const CategoryIcon = getCategoryIcon(cat.iconName);
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#6F4E37] to-[#C87E32] text-white shadow-lg shadow-[#6F4E37]/30 scale-105'
                        : 'bg-white dark:bg-[#1F1F1F] text-gray-700 dark:text-gray-300 border border-[#D4A373]/20 hover:border-[#D4A373]'
                    }`}
                  >
                    <CategoryIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-200' : 'text-[#C87E32]'}`} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <AnimatePresence mode="wait">
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-[#1F1F1F] rounded-3xl border border-[#D4A373]/20 my-8"
            >
              <Coffee className="w-12 h-12 mx-auto text-[#D4A373] mb-3 animate-bounce" />
              <h3 className="font-heading text-lg font-bold text-[#151515] dark:text-white">
                No menu items found
              </h3>
              <p className="text-xs mt-1">Try adjusting your search query or dietary filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setDietaryFilter('all');
                }}
                className="mt-4 px-4 py-2 rounded-full bg-[#6F4E37] text-white text-xs font-semibold hover:bg-[#C87E32] transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory + dietaryFilter + searchQuery}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item) => {
                const isWishlisted = wishlistIds.includes(item.id);

                return (
                  <motion.div
                    key={item.id}
                    layout
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="group bg-white dark:bg-[#1F1F1F] rounded-2xl overflow-hidden border border-[#D4A373]/20 dark:border-white/5 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Item Image with Badges */}
                    <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-black/40">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <button
                          onClick={() => onQuickView(item)}
                          className="px-3 py-1.5 rounded-full bg-white text-[#151515] text-xs font-bold flex items-center gap-1.5 shadow hover:bg-[#D4A373] hover:text-white transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Quick View</span>
                        </button>
                      </div>

                      {/* Top Left Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1">
                        {item.isBestseller && (
                          <span className="px-2 py-0.5 rounded-full bg-[#C87E32] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                            Bestseller
                          </span>
                        )}
                        {item.isChefSpecial && (
                          <span className="px-2 py-0.5 rounded-full bg-[#6F4E37] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                            Chef Special
                          </span>
                        )}
                      </div>

                      {/* Wishlist Heart Button */}
                      <button
                        onClick={() => onToggleWishlist(item)}
                        aria-label="Add to wishlist"
                        className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-[#151515]/80 backdrop-blur-sm text-gray-400 hover:text-red-500 transition-colors shadow"
                      >
                        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                      </button>

                      {/* Dietary Type Indicator Badge */}
                      <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md flex items-center gap-1.5 text-[11px] text-white">
                        <span className="w-3 h-3 rounded-sm border border-gray-300 flex items-center justify-center p-0.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.type === 'veg'
                                ? 'bg-emerald-500'
                                : item.type === 'non-veg'
                                ? 'bg-red-500'
                                : 'bg-amber-400'
                            }`}
                          />
                        </span>
                        <span className="capitalize">{item.type}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-heading font-bold text-base text-[#151515] dark:text-white line-clamp-1 group-hover:text-[#C87E32] transition-colors">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-1 text-amber-400 text-xs font-bold shrink-0">
                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                            <span>{item.rating}</span>
                          </div>
                        </div>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Price & Add Button */}
                      <div className="pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Price</span>
                          <span className="font-heading font-extrabold text-lg text-[#6F4E37] dark:text-[#D4A373]">
                            ₹{item.price}
                          </span>
                        </div>

                        <button
                          onClick={() => onAddToCart(item, 1)}
                          className="px-3.5 py-2 rounded-full bg-[#6F4E37] hover:bg-[#C87E32] text-white font-semibold text-xs transition-all duration-300 flex items-center gap-1.5 shadow-md hover:shadow-lg active:scale-95"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
