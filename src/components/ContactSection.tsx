import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, ExternalLink, Instagram, User } from 'lucide-react';
import { CONTACT_INFO } from '../data/cafeData';

interface ContactSectionProps {
  showToast: (title: string, message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ showToast }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast('Form incomplete', 'Please fill in required fields.', 'warning');
      return;
    }
    setSubmitted(true);
    showToast('Message Sent!', 'Thank you for reaching out. Our team will respond shortly.');
  };

  return (
    <section id="contact" className="py-24 bg-[#151515] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#D4A373]/20 border border-[#D4A373]/40 text-[#D4A373] text-xs font-bold uppercase tracking-widest"
          >
            Visit Or Reach Out
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-5xl text-[#FFF8F2] tracking-tight"
          >
            Get In <span className="text-[#D4A373]">Touch With Us</span>
          </motion.h2>

          <p className="text-sm sm:text-base text-gray-400">
            Have questions, feedback, or party inquiries? Drop by our Pune café or reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Cards & Map Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#1F1F1F] border border-[#D4A373]/30 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#6F4E37] text-[#D4A373] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Address</h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#1F1F1F] border border-[#D4A373]/30 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#6F4E37] text-[#D4A373] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Phone / WhatsApp</h4>
                  <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="text-xs text-[#D4A373] hover:underline mt-1 block">
                    {CONTACT_INFO.phone}
                  </a>
                  <p className="text-[11px] text-gray-400 mt-0.5">Call or message for instant booking</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#1F1F1F] border border-[#D4A373]/30 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#6F4E37] text-[#D4A373] shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Founder</h4>
                  <p className="text-xs text-gray-300 mt-1">{CONTACT_INFO.founder}</p>
                  <p className="text-[11px] text-[#D4A373] mt-0.5">{CONTACT_INFO.founderTitle}</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#1F1F1F] border border-[#D4A373]/30 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#6F4E37] text-[#D4A373] shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Instagram</h4>
                  <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="text-xs text-[#D4A373] hover:underline mt-1 block flex items-center gap-1">
                    <span>@urbansip.pune</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Box with Action Button */}
            <div className="rounded-3xl overflow-hidden border border-[#D4A373]/30 bg-[#1F1F1F] p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D4A373]" />
                  <span className="font-heading font-bold text-sm text-white">Interactive Location Map</span>
                </div>
                <a
                  href={CONTACT_INFO.googleMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#6F4E37] to-[#C87E32] text-white text-xs font-bold flex items-center gap-2 hover:brightness-110 shadow-lg transition-all"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 h-64 relative bg-black/50">
                <iframe
                  title="Urban Sip Cafe Pune Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9213829029145!2d73.81829397597143!3d18.487192669866415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfec2a210ddb%3A0x6e8e84ef29813e31!2sSuncity%20Rd%2C%20Pune%2C%20Maharashtra%20411051!5e0!3m2!1sen!2sin!4v1711000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <a
                  href={CONTACT_INFO.googleMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-3 left-3 bg-[#1F1F1F]/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-bold text-[#D4A373] border border-[#D4A373]/40 flex items-center gap-2 hover:bg-black transition-colors"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{CONTACT_INFO.shortAddress}</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-6">
            <div className="bg-[#1F1F1F] rounded-3xl p-8 border border-[#D4A373]/30 shadow-2xl">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Send Us A Message</h3>
              <p className="text-xs text-gray-400 mb-6">We read every message and usually respond within 2 hours.</p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white">Thank You!</h4>
                  <p className="text-xs text-gray-300">Your message has been sent successfully.</p>
                  <button
                    onClick={() => {
                      setForm({ name: '', email: '', subject: '', message: '' });
                      setSubmitted(false);
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#6F4E37] text-white text-xs font-bold hover:bg-[#C87E32] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Sanya Kapoor"
                      className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C87E32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="sanya@example.com"
                      className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C87E32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Feedback / Event inquiry / General query"
                      className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C87E32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Type your message here..."
                      className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C87E32]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#6F4E37] via-[#C87E32] to-[#D4A373] text-white font-bold text-sm shadow-xl hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
