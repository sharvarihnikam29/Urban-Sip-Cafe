import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Tag,
  ArrowRight,
  CheckCircle2,
  MapPin,
  CreditCard,
  QrCode,
  UtensilsCrossed,
  Sparkles
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  showToast: (title: string, message: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  showToast
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // percentage discount
  const [appliedCode, setAppliedCode] = useState<string | null>(null);

  const [checkoutStep, setCheckoutStep] = useState<boolean>(false);
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway' | 'delivery'>('dine-in');
  const [tableNumber, setTableNumber] = useState('04');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cash'>('upi');
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  // Subtotal Calculation
  const subtotal = cartItems.reduce((acc, item) => {
    let itemPrice = item.item.price;
    if (item.customization?.milk && item.customization.milk !== 'Whole') itemPrice += 20;
    if (item.customization?.extraShot) itemPrice += 30;
    if (item.customization?.extraCheese) itemPrice += 25;
    return acc + itemPrice * item.quantity;
  }, 0);

  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const gstTax = Math.round((subtotal - discountAmount) * 0.05); // 5% GST
  const finalTotal = Math.max(0, subtotal - discountAmount + gstTax);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'BOGO2026') {
      setAppliedDiscount(20);
      setAppliedCode('BOGO2026');
      showToast('Coupon Applied!', 'BOGO2026 applied: 20% discount on cart.');
    } else if (code === 'WEEKEND50') {
      setAppliedDiscount(25);
      setAppliedCode('WEEKEND50');
      showToast('Coupon Applied!', 'WEEKEND50 applied: 25% discount on cart.');
    } else if (code === 'HAPPYHOURS' || code === 'STUDENT15') {
      setAppliedDiscount(15);
      setAppliedCode(code);
      showToast('Coupon Applied!', `${code} applied: 15% discount on cart.`);
    } else if (code === 'URBAN10') {
      setAppliedDiscount(10);
      setAppliedCode('URBAN10');
      showToast('Coupon Applied!', 'URBAN10 applied: 10% discount on cart.');
    } else {
      showToast('Invalid Coupon', 'Try URBAN10, BOGO2026, or WEEKEND50.', 'warning');
    }
    setCouponCode('');
  };

  const handlePlaceOrder = () => {
    const orderId = 'USC-' + Math.floor(100000 + Math.random() * 900000);
    setOrderSuccess(orderId);
    showToast('Order Placed!', `Your order ${orderId} has been sent to our barista.`);
  };

  const handleFinishOrder = () => {
    onClearCart();
    setOrderSuccess(null);
    setCheckoutStep(false);
    onClose();
  };

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
                  <div className="p-2 rounded-full bg-[#6F4E37] text-white">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-[#151515] dark:text-white">
                      Your Order Cart
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-gray-400 hover:text-[#151515] dark:hover:text-white transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Order Success Screen */}
              {orderSuccess ? (
                <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40 animate-bounce">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#151515] dark:text-white">
                    Order Received!
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Order ID: <strong className="text-[#C87E32]">{orderSuccess}</strong>
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 max-w-xs leading-relaxed">
                    Our master barista is preparing your freshly brewed order with love.
                  </p>
                  <button
                    onClick={handleFinishOrder}
                    className="w-full py-3.5 rounded-full bg-[#6F4E37] text-white font-bold text-sm hover:bg-[#C87E32] transition-colors shadow-lg"
                  >
                    Back to Menu
                  </button>
                </div>
              ) : checkoutStep ? (
                /* Checkout Details Form */
                <div className="p-6 flex-1 overflow-y-auto space-y-6">
                  <button
                    onClick={() => setCheckoutStep(false)}
                    className="text-xs text-[#D4A373] font-semibold flex items-center gap-1 hover:underline"
                  >
                    ← Back to Cart Items
                  </button>

                  <h4 className="font-heading font-bold text-lg text-[#151515] dark:text-white">
                    Checkout Details
                  </h4>

                  {/* Order Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-2">
                      Select Service Type
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {[
                        { id: 'dine-in', label: 'Dine In' },
                        { id: 'takeaway', label: 'Takeaway' },
                        { id: 'delivery', label: 'Home Delivery' }
                      ].map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setOrderType(type.id as any)}
                          className={`py-2 px-2 rounded-xl font-semibold border transition-all ${
                            orderType === type.id
                              ? 'bg-[#6F4E37] text-white border-[#C87E32]'
                              : 'bg-gray-50 dark:bg-black/30 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Specific Fields */}
                  {orderType === 'dine-in' && (
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">
                        Table Number
                      </label>
                      <input
                        type="text"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        placeholder="e.g. Table 04"
                        className="w-full p-3 rounded-xl bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 text-sm focus:outline-none focus:border-[#C87E32]"
                      />
                    </div>
                  )}

                  {orderType === 'delivery' && (
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">
                        Delivery Address
                      </label>
                      <textarea
                        rows={2}
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="Flat no., Street, Bandra West, Mumbai..."
                        className="w-full p-3 rounded-xl bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 text-sm focus:outline-none focus:border-[#C87E32]"
                      />
                    </div>
                  )}

                  {/* Payment Method Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-2">
                      Payment Method
                    </label>
                    <div className="space-y-2">
                      <label
                        onClick={() => setPaymentMethod('upi')}
                        className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          paymentMethod === 'upi'
                            ? 'border-[#C87E32] bg-[#C87E32]/10'
                            : 'border-gray-200 dark:border-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <QrCode className="w-5 h-5 text-[#C87E32]" />
                          <div>
                            <span className="font-bold text-sm block">UPI / GPay / PhonePe</span>
                            <span className="text-[10px] text-gray-400">Instant QR Code Payment</span>
                          </div>
                        </div>
                        <input type="radio" checked={paymentMethod === 'upi'} readOnly />
                      </label>

                      <label
                        onClick={() => setPaymentMethod('card')}
                        className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          paymentMethod === 'card'
                            ? 'border-[#C87E32] bg-[#C87E32]/10'
                            : 'border-gray-200 dark:border-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-5 h-5 text-[#C87E32]" />
                          <div>
                            <span className="font-bold text-sm block">Credit / Debit Card</span>
                            <span className="text-[10px] text-gray-400">Visa, MasterCard, RuPay</span>
                          </div>
                        </div>
                        <input type="radio" checked={paymentMethod === 'card'} readOnly />
                      </label>
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 space-y-2 text-xs">
                    <div className="flex justify-between text-gray-500 dark:text-gray-400">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-600 font-semibold">
                        <span>Discount ({appliedCode})</span>
                        <span>-₹{discountAmount}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-gray-500 dark:text-gray-400">
                      <span>GST (5%)</span>
                      <span>₹{gstTax}</span>
                    </div>
                    <div className="flex justify-between font-extrabold text-base text-[#151515] dark:text-white pt-2 border-t border-gray-200 dark:border-white/10">
                      <span>Grand Total</span>
                      <span className="text-[#C87E32]">₹{finalTotal}</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePlaceOrder}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#6F4E37] via-[#C87E32] to-[#D4A373] text-white font-extrabold text-base shadow-xl hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Pay & Place Order • ₹{finalTotal}</span>
                  </button>
                </div>
              ) : (
                /* Cart Items List */
                <div className="p-6 flex-1 overflow-y-auto space-y-4">
                  {cartItems.length === 0 ? (
                    <div className="py-16 text-center space-y-3">
                      <ShoppingBag className="w-16 h-16 mx-auto text-[#D4A373] opacity-50" />
                      <p className="font-heading font-bold text-lg text-gray-500 dark:text-gray-400">
                        Your cart is empty
                      </p>
                      <p className="text-xs text-gray-400">Add some delicious brews and snacks!</p>
                      <button
                        onClick={onClose}
                        className="mt-4 px-6 py-2.5 rounded-full bg-[#6F4E37] text-white text-xs font-semibold hover:bg-[#C87E32] transition-colors"
                      >
                        Explore Menu
                      </button>
                    </div>
                  ) : (
                    cartItems.map((cartItem, idx) => {
                      let itemPrice = cartItem.item.price;
                      if (cartItem.customization?.milk && cartItem.customization.milk !== 'Whole') itemPrice += 20;
                      if (cartItem.customization?.extraShot) itemPrice += 30;
                      if (cartItem.customization?.extraCheese) itemPrice += 25;

                      return (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-gray-50 dark:bg-[#1F1F1F] border border-gray-200 dark:border-white/10 flex gap-4 items-center justify-between shadow-sm"
                        >
                          <img
                            src={cartItem.item.image}
                            alt={cartItem.item.name}
                            referrerPolicy="no-referrer"
                            className="w-16 h-16 rounded-xl object-cover shrink-0"
                          />

                          <div className="flex-1 min-w-0">
                            <h4 className="font-heading font-bold text-sm text-[#151515] dark:text-white truncate">
                              {cartItem.item.name}
                            </h4>
                            <p className="text-xs font-bold text-[#C87E32] mt-0.5">
                              ₹{itemPrice} x {cartItem.quantity}
                            </p>

                            {/* Customizations tags */}
                            {cartItem.customization && (
                              <p className="text-[10px] text-gray-400 mt-0.5 truncate">
                                {[
                                  cartItem.customization.milk,
                                  cartItem.customization.extraShot ? 'Extra Shot' : null,
                                  cartItem.customization.extraCheese ? 'Extra Cheese' : null,
                                  cartItem.customization.notes
                                ]
                                  .filter(Boolean)
                                  .join(' • ')}
                              </p>
                            )}
                          </div>

                          {/* Qty Controls */}
                          <div className="flex flex-col items-end gap-2 shrink-0">
                            <div className="flex items-center gap-2 bg-white dark:bg-black/40 rounded-full p-1 border border-gray-200 dark:border-white/10">
                              <button
                                onClick={() => onUpdateQuantity(idx, cartItem.quantity - 1)}
                                className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold px-1">{cartItem.quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(idx, cartItem.quantity + 1)}
                                className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(idx)}
                              className="text-xs text-red-500 hover:text-red-700 p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              )}

              {/* Cart Footer Total & Checkout CTA */}
              {!orderSuccess && cartItems.length > 0 && !checkoutStep && (
                <div className="p-6 border-t border-gray-200 dark:border-white/10 space-y-4 bg-gray-50/50 dark:bg-black/20">
                  {/* Coupon Input */}
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Promo Code (e.g. URBAN10)"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-[#1F1F1F] border border-gray-200 dark:border-white/10 text-xs focus:outline-none focus:border-[#C87E32]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#6F4E37] text-white text-xs font-bold hover:bg-[#C87E32] transition-colors"
                    >
                      Apply
                    </button>
                  </form>

                  {/* Summary */}
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between text-gray-500 dark:text-gray-400">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-600 font-semibold">
                        <span>Discount ({appliedCode})</span>
                        <span>-₹{discountAmount}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-extrabold text-base text-[#151515] dark:text-white pt-1">
                      <span>Est. Total</span>
                      <span className="text-[#C87E32]">₹{finalTotal}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setCheckoutStep(true)}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#6F4E37] via-[#C87E32] to-[#D4A373] text-white font-extrabold text-sm shadow-xl hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
