import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Award, HeartHandshake, Zap, Users, Utensils, Star, Calendar, UserCheck, Coffee, MapPin } from 'lucide-react';
import { CAFE_STATS, CONTACT_INFO } from '../data/cafeData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      desc: 'Farm-fresh organic dairy, locally sourced vegetables, and premium single-origin beans roasted daily.',
      color: 'from-emerald-500/20 to-emerald-700/10 text-emerald-400'
    },
    {
      icon: Award,
      title: 'Premium Coffee',
      desc: 'Top 1% Arabica beans carefully sourced from South India’s high-altitude estates of Baba Budangiri.',
      color: 'from-amber-500/20 to-amber-700/10 text-amber-400'
    },
    {
      icon: HeartHandshake,
      title: 'Friendly Atmosphere',
      desc: 'Cozy modern seating, warm lighting, ambient playlists & welcoming baristas making you feel at home.',
      color: 'from-orange-500/20 to-orange-700/10 text-orange-400'
    },
    {
      icon: Zap,
      title: 'Fast & Fresh Service',
      desc: 'Hot food served fresh from the wok & espresso poured within minutes without compromising quality.',
      color: 'from-yellow-500/20 to-yellow-700/10 text-yellow-400'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#FFF8F2] dark:bg-[#151515] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#6F4E37]/10 dark:bg-[#6F4E37]/30 text-[#6F4E37] dark:text-[#D4A373] text-xs font-bold uppercase tracking-widest border border-[#D4A373]/30"
          >
            Our Story & Vision
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-5xl text-[#151515] dark:text-[#FFF8F2] tracking-tight"
          >
            Welcome to <span className="text-[#C87E32]">Urban Sip Cafe</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Founded by <strong>{CONTACT_INFO.founder}</strong> in {CONTACT_INFO.city}, Urban Sip Cafe was born from a passion for handcrafted Indian specialty coffees and comfort food elevated to luxury standards at {CONTACT_INFO.locality}.
          </motion.p>
        </div>

        {/* Feature Grid & Visual Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Visual collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#1F1F1F]">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                alt="Urban Sip Barista Brewing Coffee"
                referrerPolicy="no-referrer"
                className="w-full h-96 sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs text-[#D4A373] font-bold uppercase tracking-wider">Artisanal Craftsmanship</span>
                  <p className="font-heading text-lg font-bold">100% Hand-Poured Single Origin Espresso</p>
                </div>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl shadow-xl dark:bg-[#1F1F1F] dark:border-white/10 hidden sm:block max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#6F4E37] text-[#D4A373] flex items-center justify-center font-bold text-xl">
                  4.9
                </div>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-[#151515] dark:text-white mt-1">
                    Highest Rated Cafe in Pune
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-[#1F1F1F] border border-[#D4A373]/20 dark:border-white/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#151515] dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Founder Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#1F1F1F] via-[#2A1F18] to-[#1F1F1F] p-8 sm:p-10 rounded-3xl border border-[#D4A373]/30 shadow-2xl text-white mb-16 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#6F4E37] to-[#C87E32] flex items-center justify-center shrink-0 border-4 border-[#D4A373]/40 shadow-xl text-3xl font-extrabold font-heading text-white">
              AB
            </div>

            <div className="space-y-3 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A373]/20 border border-[#D4A373]/40 text-[#D4A373] text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Founder Spotlight</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#FFF8F2]">
                {CONTACT_INFO.founder}
              </h3>
              <p className="text-xs text-[#D4A373] font-semibold uppercase tracking-widest">
                {CONTACT_INFO.founderTitle}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
                "{CONTACT_INFO.founderBio} At Urban Sip, every cup is brewed with warmth, precision, and the finest local craftsmanship."
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Coffee className="w-4 h-4 text-[#D4A373]" />
                  Chikmagalur Single-Origin Roasts
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#D4A373]" />
                  {CONTACT_INFO.locality}, {CONTACT_INFO.city}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics Cards Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {CAFE_STATS.map((stat, idx) => {
            const getIcon = (iconName: string) => {
              if (iconName === 'Users') return Users;
              if (iconName === 'Utensils') return Utensils;
              if (iconName === 'Star') return Star;
              return Calendar;
            };
            const IconComponent = getIcon(stat.icon);

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#6F4E37] to-[#151515] text-[#FFF8F2] text-center shadow-xl border border-[#D4A373]/30 relative overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute top-3 right-3 text-[#D4A373]/20 group-hover:text-[#D4A373]/40 transition-colors">
                  <IconComponent className="w-10 h-10" />
                </div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#D4A373]">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
