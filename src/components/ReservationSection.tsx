import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Clock,
  Users,
  Utensils,
  CheckCircle2,
  Phone,
  Mail,
  User,
  Sparkles,
  MapPin,
  X
} from 'lucide-react';
import { CONTACT_INFO } from '../data/cafeData';
import { ReservationData } from '../types';

interface ReservationSectionProps {
  showToast: (title: string, message: string) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ showToast }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    email: '',
    guests: 2,
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    seatingArea: 'indoor',
    specialRequest: ''
  });

  const [confirmedBooking, setConfirmedBooking] = useState<ReservationData | null>(null);

  const timeSlots = [
    '09:00 AM',
    '11:00 AM',
    '01:00 PM',
    '03:30 PM',
    '06:00 PM',
    '08:30 PM',
    '09:45 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast('Validation Error', 'Please fill in your name and phone number.', 'warning');
      return;
    }

    setConfirmedBooking({ ...formData });
    showToast('Table Reserved!', `Table for ${formData.guests} guests confirmed for ${formData.date} at ${formData.time}.`);
  };

  return (
    <section id="reservation" className="py-24 bg-[#FFF8F2] dark:bg-[#151515] transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#6F4E37]/10 dark:bg-[#6F4E37]/30 text-[#6F4E37] dark:text-[#D4A373] text-xs font-bold uppercase tracking-widest border border-[#D4A373]/30"
            >
              Book Your Table
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-3xl sm:text-5xl text-[#151515] dark:text-[#FFF8F2] tracking-tight"
            >
              Reserve a <span className="text-[#C87E32]">Cozy Table</span>
            </motion.h2>

            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Planning a date night, business meeting, or weekend reunion with friends? Reserve your spot in advance and enjoy priority seating with complimentary brew tastings.
            </p>

            <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-white/10">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#6F4E37]/20 text-[#C87E32] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#151515] dark:text-white">Location</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{CONTACT_INFO.shortAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#6F4E37]/20 text-[#C87E32] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#151515] dark:text-white">Operating Hours</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Open 7 Days • 8:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#6F4E37]/20 text-[#C87E32] shrink-0">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#151515] dark:text-white">Perks Included</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Complimentary Valet Parking & Fast Wi-Fi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Reservation Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1F1F1F] rounded-3xl p-8 shadow-2xl border border-[#D4A373]/30"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikramaditya Singh"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 text-sm text-[#151515] dark:text-white focus:outline-none focus:border-[#C87E32]"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-300 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 text-sm text-[#151515] dark:text-white focus:outline-none focus:border-[#C87E32]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 text-sm text-[#151515] dark:text-white focus:outline-none focus:border-[#C87E32]"
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-300 mb-1">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 text-sm text-[#151515] dark:text-white focus:outline-none focus:border-[#C87E32]"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-300 mb-1">
                      Reservation Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 text-sm text-[#151515] dark:text-white focus:outline-none focus:border-[#C87E32]"
                      />
                    </div>
                  </div>

                  {/* Preferred Seating Area */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-300 mb-1">
                      Seating Preference
                    </label>
                    <div className="relative">
                      <Utensils className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        value={formData.seatingArea}
                        onChange={(e: any) => setFormData({ ...formData, seatingArea: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 text-sm text-[#151515] dark:text-white focus:outline-none focus:border-[#C87E32]"
                      >
                        <option value="indoor">Indoor Luxury Lounge</option>
                        <option value="outdoor-garden">Outdoor Garden Terrace</option>
                        <option value="window-booth">Window View Booth</option>
                        <option value="private-lounge">Private VIP Room</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Time Slots Radio Pills */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-300 mb-2">
                    Select Time Slot
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setFormData({ ...formData, time: slot })}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                          formData.time === slot
                            ? 'bg-[#6F4E37] text-white border-[#C87E32] shadow'
                            : 'bg-gray-50 dark:bg-black/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-[#D4A373]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Request */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-300 mb-1">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    placeholder="e.g. Birthday setup, high chair needed, quiet corner requested..."
                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 text-sm text-[#151515] dark:text-white focus:outline-none focus:border-[#C87E32]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#6F4E37] via-[#C87E32] to-[#D4A373] text-white font-extrabold text-base shadow-xl hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Confirm Table Reservation</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmedBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#1F1F1F] rounded-3xl p-8 max-w-md w-full border border-[#D4A373]/40 shadow-2xl text-center text-white relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white">
                Reservation Confirmed!
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                We look forward to hosting you at Urban Sip Cafe.
              </p>

              {/* Digital Pass Ticket */}
              <div className="my-6 p-4 rounded-2xl bg-black/60 border border-dashed border-[#D4A373]/50 text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Guest Name:</span>
                  <span className="font-bold text-[#D4A373]">{confirmedBooking.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Party Size:</span>
                  <span className="font-bold text-white">{confirmedBooking.guests} Guests</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Date & Time:</span>
                  <span className="font-bold text-white">{confirmedBooking.date} @ {confirmedBooking.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Seating:</span>
                  <span className="font-bold text-amber-400 capitalize">{confirmedBooking.seatingArea.replace('-', ' ')}</span>
                </div>
              </div>

              <button
                onClick={() => setConfirmedBooking(null)}
                className="w-full py-3 rounded-full bg-[#6F4E37] text-white font-bold text-sm hover:bg-[#C87E32] transition-colors"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
