import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { ToastContainer } from './components/ToastContainer';
import { Navbar } from './components/Navbar';
import { PageHeader } from './components/PageHeader';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedMenuSection } from './components/FeaturedMenuSection';
import { QuickViewModal } from './components/QuickViewModal';
import { TodaysSpecialSection } from './components/TodaysSpecialSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';
import { MenuItem, CartItem, ToastMessage, Offer, PageType } from './types';
import { ArrowRight, Coffee, Sparkles, Calendar, Star, Image, MessageSquare, MapPin, Heart } from 'lucide-react';

export default function App() {
  // Page Navigation State
  const [activePage, setActivePage] = useState<PageType>(() => {
    const hash = window.location.hash.replace('#', '') as PageType;
    if (['home', 'about', 'menu', 'special', 'gallery', 'reviews', 'reservation', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Cart & Wishlist state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<MenuItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  // Quick view item modal state
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Toast Notifications state
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Page navigate function
  const handleNavigate = (page: PageType) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageType;
      if (['home', 'about', 'menu', 'special', 'gallery', 'reviews', 'reservation', 'contact'].includes(hash)) {
        setActivePage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Toggle Dark Mode in HTML root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Add to cart handler
  const handleAddToCart = (item: MenuItem, quantity: number = 1, customization?: any) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (ci) =>
          ci.item.id === item.id &&
          JSON.stringify(ci.customization || {}) === JSON.stringify(customization || {})
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [...prev, { item, quantity, customization }];
    });

    showToast('Added to Cart', `${item.name} (${quantity}) added to your cart.`);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    showToast('Item Removed', 'Item removed from cart.', 'info');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist handler
  const handleToggleWishlist = (item: MenuItem) => {
    setWishlistItems((prev) => {
      const exists = prev.some((wi) => wi.id === item.id);
      if (exists) {
        showToast('Removed from Favorites', `${item.name} removed from wishlist.`, 'info');
        return prev.filter((wi) => wi.id !== item.id);
      } else {
        showToast('Saved to Favorites', `${item.name} added to wishlist.`);
        return [...prev, item];
      }
    });
  };

  const handleClaimOffer = (offer: Offer) => {
    showToast('Special Offer Claimed!', `Code "${offer.code}" is ready. Go to Menu or Cart to redeem!`);
    handleNavigate('menu');
  };

  const totalCartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);
  const wishlistIds = wishlistItems.map((wi) => wi.id);

  return (
    <div className="min-h-screen bg-[#FFF8F2] dark:bg-[#151515] text-[#151515] dark:text-[#FFF8F2] transition-colors font-sans antialiased selection:bg-[#D4A373] selection:text-white">
      {/* Brewing Preloader */}
      <Preloader />

      {/* Floating Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={handleDismissToast} />

      {/* Header Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlistItems.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onSearchClick={() => handleNavigate('menu')}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Main Pages Switcher */}
      <main className="min-h-screen">
        {/* PAGE 1: HOME */}
        {activePage === 'home' && (
          <div>
            <HeroSection onNavigate={handleNavigate} />

            {/* Quick Explore Page Navigation Cards */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-[#C87E32] font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#C87E32]/10 border border-[#C87E32]/30">
                  Welcome to Urban Sip Cafe
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#151515] dark:text-[#FFF8F2] mt-3">
                  Explore Our Cafe App
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-3">
                  Click on any page below or use the top navigation menu to visit dedicated pages for menu, deals, gallery, reviews, and reservations.
                </p>
              </div>

              {/* Grid of Dedicated Page Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 1. About Card */}
                <div
                  onClick={() => handleNavigate('about')}
                  className="group bg-white dark:bg-[#1E1E1E] p-8 rounded-3xl border border-[#D4A373]/20 shadow-xl hover:shadow-2xl hover:border-[#D4A373] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#6F4E37] to-[#C87E32] text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <Coffee className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-[#C87E32] uppercase tracking-wider">Page 01</span>
                    <h3 className="font-heading font-bold text-xl text-[#151515] dark:text-white mt-1">Our Story & Craft</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                      Discover our journey, single-origin Chikmagalur beans, artisanal roasting, and passion for authentic coffee.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#C87E32] group-hover:translate-x-1.5 transition-transform">
                    <span>Visit About Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* 2. Menu Card */}
                <div
                  onClick={() => handleNavigate('menu')}
                  className="group bg-white dark:bg-[#1E1E1E] p-8 rounded-3xl border border-[#D4A373]/20 shadow-xl hover:shadow-2xl hover:border-[#D4A373] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#C87E32] to-[#D4A373] text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-[#C87E32] uppercase tracking-wider">Page 02</span>
                    <h3 className="font-heading font-bold text-xl text-[#151515] dark:text-white mt-1">Artisanal Food & Drinks</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                      50+ items including hot beverages, thick frappes, crispy momos, cheese maggi & gourmet burgers.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#C87E32] group-hover:translate-x-1.5 transition-transform">
                    <span>Open Full Menu</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* 3. Special Deals Card */}
                <div
                  onClick={() => handleNavigate('special')}
                  className="group bg-white dark:bg-[#1E1E1E] p-8 rounded-3xl border border-[#D4A373]/20 shadow-xl hover:shadow-2xl hover:border-[#D4A373] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <Star className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">Page 03</span>
                    <h3 className="font-heading font-bold text-xl text-[#151515] dark:text-white mt-1">Today's Deals & Offers</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                      Happy hour discounts, promo codes, chef recommendations, and instant discount vouchers.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#C87E32] group-hover:translate-x-1.5 transition-transform">
                    <span>View Today's Deals</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* 4. Gallery Card */}
                <div
                  onClick={() => handleNavigate('gallery')}
                  className="group bg-white dark:bg-[#1E1E1E] p-8 rounded-3xl border border-[#D4A373]/20 shadow-xl hover:shadow-2xl hover:border-[#D4A373] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <Image className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-purple-500 uppercase tracking-wider">Page 04</span>
                    <h3 className="font-heading font-bold text-xl text-[#151515] dark:text-white mt-1">Photo Gallery</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                      Immerse in our cozy coffee house atmosphere, outdoor seating, brewing moments, and social feed.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#C87E32] group-hover:translate-x-1.5 transition-transform">
                    <span>Explore Photo Gallery</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* 5. Reviews Card */}
                <div
                  onClick={() => handleNavigate('reviews')}
                  className="group bg-white dark:bg-[#1E1E1E] p-8 rounded-3xl border border-[#D4A373]/20 shadow-xl hover:shadow-2xl hover:border-[#D4A373] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">Page 05</span>
                    <h3 className="font-heading font-bold text-xl text-[#151515] dark:text-white mt-1">Patron Testimonials</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                      Read real reviews from 10,000+ satisfied guests and leave your feedback for the baristas.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#C87E32] group-hover:translate-x-1.5 transition-transform">
                    <span>Read All Reviews</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* 6. Reservation Card */}
                <div
                  onClick={() => handleNavigate('reservation')}
                  className="group bg-white dark:bg-[#1E1E1E] p-8 rounded-3xl border border-[#D4A373]/20 shadow-xl hover:shadow-2xl hover:border-[#D4A373] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <Calendar className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Page 06</span>
                    <h3 className="font-heading font-bold text-xl text-[#151515] dark:text-white mt-1">Table Reservation</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                      Book your favorite spot — AC indoor lounge, garden outdoor, or romantic window booth.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#C87E32] group-hover:translate-x-1.5 transition-transform">
                    <span>Reserve a Table</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* 7. Contact Card */}
                <div
                  onClick={() => handleNavigate('contact')}
                  className="group bg-white dark:bg-[#1E1E1E] p-8 rounded-3xl border border-[#D4A373]/20 shadow-xl hover:shadow-2xl hover:border-[#D4A373] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 lg:col-span-3 sm:col-span-2"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                        <MapPin className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Page 07</span>
                      <h3 className="font-heading font-bold text-2xl text-[#151515] dark:text-white mt-1">Contact & Directions</h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-xl leading-relaxed">
                        Located at Bandra Linking Road, Mumbai. Get interactive directions, operating hours, phone booking, or send a direct message.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6F4E37] to-[#C87E32] text-white text-xs font-bold flex items-center gap-2 shadow-lg group-hover:scale-105 transition-transform">
                        <span>Get Directions & FAQ</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* PAGE 2: ABOUT */}
        {activePage === 'about' && (
          <div>
            <PageHeader
              title="About Urban Sip Cafe"
              subtitle="Crafting unforgettable moments, one artisanal cup & gourmet bite at a time."
              currentPage="about"
              onNavigate={handleNavigate}
              badge="Our Story & Vision"
            />
            <AboutSection />
          </div>
        )}

        {/* PAGE 3: MENU */}
        {activePage === 'menu' && (
          <div>
            <PageHeader
              title="Artisanal Cafe Menu"
              subtitle="Explore our single-origin coffees, handcrafted frappes, crispy momos, cheese maggi & gourmet burgers."
              currentPage="menu"
              onNavigate={handleNavigate}
              badge="Freshly Prepared"
            />
            <FeaturedMenuSection
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
              onQuickView={(item) => setQuickViewItem(item)}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        )}

        {/* PAGE 4: SPECIAL */}
        {activePage === 'special' && (
          <div>
            <PageHeader
              title="Today's Specials & Happy Hour"
              subtitle="Exclusive combos, discount promo codes & chef recommendations updated daily."
              currentPage="special"
              onNavigate={handleNavigate}
              badge="Limited Deals"
            />
            <TodaysSpecialSection onClaimOffer={handleClaimOffer} showToast={showToast} />
          </div>
        )}

        {/* PAGE 5: GALLERY */}
        {activePage === 'gallery' && (
          <div>
            <PageHeader
              title="Cafe Photo Gallery"
              subtitle="Take a peek inside our cozy lounge, coffee craft moments & happy patrons."
              currentPage="gallery"
              onNavigate={handleNavigate}
              badge="Visual Moments"
            />
            <GallerySection />
          </div>
        )}

        {/* PAGE 6: REVIEWS */}
        {activePage === 'reviews' && (
          <div>
            <PageHeader
              title="Patron Testimonials & Reviews"
              subtitle="Read genuine feedback from 10,000+ coffee enthusiasts and share your own experience."
              currentPage="reviews"
              onNavigate={handleNavigate}
              badge="4.9 ★ Rated"
            />
            <ReviewsSection />
          </div>
        )}

        {/* PAGE 7: RESERVATION */}
        {activePage === 'reservation' && (
          <div>
            <PageHeader
              title="Reserve Your Table"
              subtitle="Book a cozy booth, outdoor garden seat, or private lounge at Bandra Linking Road, Mumbai."
              currentPage="reservation"
              onNavigate={handleNavigate}
              badge="Instant Confirmation"
            />
            <ReservationSection showToast={showToast} />
          </div>
        )}

        {/* PAGE 8: CONTACT */}
        {activePage === 'contact' && (
          <div>
            <PageHeader
              title="Contact Us & Directions"
              subtitle="We're located in the heart of Mumbai. Drop by, give us a call, or send a message."
              currentPage="contact"
              onNavigate={handleNavigate}
              badge="Visit Us Today"
            />
            <ContactSection showToast={showToast} />
            <FaqSection />
          </div>
        )}
      </main>

      {/* Footer Component */}
      <Footer showToast={showToast} onNavigate={handleNavigate} />

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        showToast={showToast}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <QuickViewModal
        item={quickViewItem}
        onClose={() => setQuickViewItem(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewItem ? wishlistIds.includes(quickViewItem.id) : false}
      />

      {/* Floating Helpers */}
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}

