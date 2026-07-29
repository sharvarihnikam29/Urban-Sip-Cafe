import { Offer, Review, GalleryItem } from '../types';

export const OFFERS: Offer[] = [
  {
    id: 'offer-1',
    title: 'Buy 1 Get 1 Coffee',
    subtitle: 'Double the caffeine, double the joy',
    code: 'BOGO2026',
    discount: '100% OFF on 2nd Coffee',
    description: 'Order any artisanal Hot Coffee or Cold Beverage and get a second beverage of equal value completely FREE!',
    badge: 'Popular Deal',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    validUntil: 'Every Tuesday & Thursday'
  },
  {
    id: 'offer-2',
    title: 'Weekend Chill Combo',
    subtitle: 'Burger + Shake + Peri Peri Fries',
    code: 'WEEKEND50',
    discount: 'Flat ₹100 OFF',
    description: 'Grab any Special Tower Burger + Choco Oreo Frappe + Peri Peri Loaded Fries at an unbeatable combo price.',
    badge: 'Chef Special',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    validUntil: 'Saturday & Sunday All Day'
  },
  {
    id: 'offer-3',
    title: 'Happy Hours Special',
    subtitle: 'Flat 20% OFF on all beverages & desserts',
    code: 'HAPPYHOURS',
    discount: '20% OFF',
    description: 'Relax after work or college during our daily afternoon golden hours with discounted brews and milkshakes.',
    badge: 'Daily 3PM - 6PM',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    validUntil: 'Mon - Fri (3:00 PM - 6:00 PM)'
  },
  {
    id: 'offer-4',
    title: 'Student Perk Discount',
    subtitle: 'Show your valid college ID & save big',
    code: 'STUDENT15',
    discount: '15% OFF',
    description: 'Special perk for high school & university students! Enjoy 15% discount on all food items and momos.',
    badge: 'Student Special',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    validUntil: 'Valid on all weekdays'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Aarav Sharma',
    role: 'Coffee Enthusiast & Architect',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Urban Sip Cafe has completely redefined coffee in Pune on Sinhgad Road. Their Hazelnut Frappe and Cheese Chilli Toast are out of this world! Cozy aesthetic and warm staff.',
    date: '2 days ago',
    favoriteItem: 'Hazelnut Frappe'
  },
  {
    id: 'rev-2',
    name: 'Priya Malhotra',
    role: 'Food Blogger & Vlogger',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'The ambience feels as luxurious as Blue Tokai & Starbucks, but the prices are so friendly! Their Aafat Chicken Tower Burger and Biscoff Milkshake are top tier.',
    date: '1 week ago',
    favoriteItem: 'Biscoff Milkshake'
  },
  {
    id: 'rev-3',
    name: 'Rohan Verma',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Perfect spot for remote work! Ultra-fast Wi-Fi, plenty of power sockets, and the Hot Chocolate with marshmallow fluff is pure comfort in a cup.',
    date: '2 weeks ago',
    favoriteItem: 'Hot Chocolate'
  },
  {
    id: 'rev-4',
    name: 'Ananya Deshmukh',
    role: 'UX Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'We booked a birthday table here last weekend. The service was insanely fast, presentation was gorgeous, and the Paneer Fried Momos were spectacular.',
    date: '3 weeks ago',
    favoriteItem: 'Paneer Fried Momos'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Artisanal Latte Art',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    caption: 'Fresh espresso expertly hand-crafted by our master baristas.'
  },
  {
    id: 'gal-2',
    title: 'Luxury Ambient Lounge',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    caption: 'Warm mahogany woods, plush velvet seating, and calming ambient lights.'
  },
  {
    id: 'gal-3',
    title: 'Aafat Monster Burger',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=800&q=80',
    caption: 'Stacked high with double patties, melting cheese & house glaze.'
  },
  {
    id: 'gal-4',
    title: 'Happy Coffee Lovers',
    category: 'customers',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    caption: 'Friends reuniting over cold frappes and piping hot Maggi.'
  },
  {
    id: 'gal-5',
    title: 'Biscoff & Choco Milkshakes',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    caption: 'Thick creamy milkshakes drizzled with chocolate ganache & biscoff crumbs.'
  },
  {
    id: 'gal-6',
    title: 'Outdoor Garden Terrace',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    caption: 'Lush greenery and evening fairy lights for a romantic outdoor coffee date.'
  },
  {
    id: 'gal-7',
    title: 'Crispy Momos & Spicy Dip',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=800&q=80',
    caption: 'Golden fried momos accompanied by red chili garlic chutney.'
  },
  {
    id: 'gal-8',
    title: 'Work & Brew Vibes',
    category: 'customers',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    caption: 'Productive afternoons with high-speed WiFi and endless pour-overs.'
  }
];

export const FAQS = [
  {
    question: 'Where is Urban Sip Cafe located in Pune and what are the timings?',
    answer: 'Urban Sip Cafe is located at Shop no.09- Kiara Artemis, Suncity, Sinhgad Road, Pune, Maharashtra 411051. We are open every day of the week from 8:00 AM to 11:00 PM.'
  },
  {
    question: 'Do you offer Jain and Vegan food options?',
    answer: 'Yes! We have dedicated Jain options (prepared without onion and garlic) including Jain Pizzas, Momos, and Sandwiches. We also offer oat milk and almond milk substitutions for all hot and cold coffee beverages.'
  },
  {
    question: 'Is high-speed Wi-Fi and charging available for remote work?',
    answer: 'Absolutely. Every table in our indoor lounge is equipped with dedicated charging sockets and complimentary 100 Mbps high-speed Wi-Fi.'
  },
  {
    question: 'How do I reserve a table for a party or date night?',
    answer: 'You can easily reserve a table using our online Reservation form or by calling us directly at +91 9850965296. Reservations are free with instant confirmation.'
  },
  {
    question: 'Do you offer home delivery and takeaway?',
    answer: 'Yes, you can place online takeaway or delivery orders directly on our website cart or find us on Swiggy & Zomato.'
  },
  {
    question: 'Is valet parking available at the cafe?',
    answer: 'Yes, we provide complimentary parking for all our café guests.'
  }
];

export const CAFE_STATS = [
  { label: 'Happy Customers', value: 10000, suffix: '+', icon: 'Users' },
  { label: 'Menu Items', value: 50, suffix: '+', icon: 'Utensils' },
  { label: 'Average Rating', value: 4.9, suffix: ' / 5', isDecimal: true, icon: 'Star' },
  { label: 'Established', value: 2022, suffix: '', icon: 'Award' }
];

export const CONTACT_INFO = {
  name: 'Urban Sip Cafe',
  founder: 'Aryan Bachuwar',
  founderTitle: 'Founder & Chief Roaster',
  founderBio: 'Founded by Aryan Bachuwar with a vision to bring world-class single-origin coffee and artisanal gourmet dining to Pune.',
  address: 'Shop no.09- Kiara Artemis, Suncity, Sinhgad Road, Pune, Maharashtra 411051',
  shortAddress: 'Shop no.09- Kiara Artemis, Suncity, Sinhgad Road, Pune',
  city: 'Pune',
  locality: 'Suncity, Sinhgad Road',
  phone: '+91 9850965296',
  alternatePhone: '+91 9850965296',
  email: 'urbansip.pune@gmail.com',
  hours: 'Mon - Sun: 8:00 AM - 11:00 PM',
  whatsapp: '919850965296',
  whatsappUrl: 'https://wa.me/919850965296',
  instagram: 'https://www.instagram.com/urbansip.pune?igsh=MWFkcm51M213ZGdiMw==',
  facebook: 'https://facebook.com',
  googleMapUrl: 'https://maps.app.goo.gl/ERyyvG7999Ywqxfu7'
};
