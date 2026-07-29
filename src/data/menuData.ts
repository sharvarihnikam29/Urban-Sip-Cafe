import { MenuItem, CategoryId } from '../types';

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  iconName: string;
  description: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'hot-beverages', name: 'Hot Beverages', iconName: 'Coffee', description: 'Freshly brewed aromatic teas & rich coffees' },
  { id: 'cold-beverages', name: 'Cold Beverages', iconName: 'CupSoda', description: 'Refreshing iced teas, sodas & chilled coffees' },
  { id: 'milkshakes', name: 'Milkshakes', iconName: 'Milk', description: 'Creamy blended milkshakes topped with goodness' },
  { id: 'frappes', name: 'Frappes', iconName: 'Flame', description: 'Signature blended ice frappes with thick cream' },
  { id: 'momos', name: 'Momos', iconName: 'Soup', description: 'Crispy fried dumplings served with spicy dip' },
  { id: 'maggi', name: 'Maggi', iconName: 'UtensilsCrossed', description: 'Hot comforting classic & peri peri spicy Maggi' },
  { id: 'toasts', name: 'Toasts', iconName: 'Square', description: 'Crispy artisan toasts with melting cheese & toppings' },
  { id: 'veg-snacks', name: 'Veg Snacks', iconName: 'Popcorn', description: 'Golden crunchy vegetarian bites & kebabs' },
  { id: 'non-veg-snacks', name: 'Non-Veg Snacks', iconName: 'Drumstick', description: 'Crispy chicken tenders, popcorn & savory snacks' },
  { id: 'veg-burgers', name: 'Veg Burgers', iconName: 'Sandwich', description: 'Juicy veggie patties layered with signature sauces' },
  { id: 'non-veg-burgers', name: 'Non Veg Burgers', iconName: 'Beef', description: 'Substantial chicken burgers with fiery spice' },
  { id: 'special-burgers', name: 'Special Burgers', iconName: 'Crown', description: 'Epic multi-layered monster towers' },
  { id: 'sandwiches', name: 'Sandwiches', iconName: 'Bread', description: 'Freshly grilled club & chutney sandwiches' },
  { id: 'pizza', name: 'Pizza', iconName: 'Pizza', description: 'Hand-tossed crust topped with generous cheese' },
];

export const MENU_ITEMS: MenuItem[] = [
  // HOT BEVERAGES
  {
    id: 'hot-1',
    name: 'Tea',
    category: 'hot-beverages',
    price: 20,
    description: 'Traditional Indian Kulhad Chai simmered with fresh ginger & cardamom.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.8,
    isBestseller: true,
    prepTime: '5 mins'
  },
  {
    id: 'hot-2',
    name: 'Lemon Tea',
    category: 'hot-beverages',
    price: 29,
    description: 'Invigorating black tea infused with fresh lemon juice & mint leaves.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.6,
    prepTime: '5 mins'
  },
  {
    id: 'hot-3',
    name: 'Hot Coffee',
    category: 'hot-beverages',
    price: 30,
    description: 'Classic velvety steamed milk poured over roasted espresso beans.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.9,
    isBestseller: true,
    prepTime: '6 mins'
  },
  {
    id: 'hot-4',
    name: 'Hot Chocolate',
    category: 'hot-beverages',
    price: 49,
    description: 'Rich Belgian cocoa molten chocolate topped with marshmallow fluff.',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.9,
    isChefSpecial: true,
    prepTime: '7 mins'
  },

  // COLD BEVERAGES
  {
    id: 'cold-1',
    name: 'Kokum Sharbat / Soda',
    category: 'cold-beverages',
    price: 39,
    description: 'Authentic Goan kokum extract chilled with roasted cumin & fizz.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.7,
    prepTime: '4 mins'
  },
  {
    id: 'cold-2',
    name: 'Cold Coffee',
    category: 'cold-beverages',
    price: 49,
    description: 'Thick creamy blended cold espresso with chocolate drizzle.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.9,
    isBestseller: true,
    prepTime: '5 mins'
  },
  {
    id: 'cold-3',
    name: 'Ice Tea',
    category: 'cold-beverages',
    price: 49,
    description: 'Peach & lemon infused chilled ice tea garnished with citrus slices.',
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.7,
    prepTime: '4 mins'
  },

  // MILKSHAKES
  {
    id: 'shake-1',
    name: 'Mango Milkshake',
    category: 'milkshakes',
    price: 109,
    description: 'Alphonso mango pulp thick blend with vanilla cream.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.8,
    prepTime: '6 mins'
  },
  {
    id: 'shake-2',
    name: 'Strawberry Milkshake',
    category: 'milkshakes',
    price: 109,
    description: 'Mahabaleshwar fresh strawberry puree & whole milk shake.',
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.7,
    prepTime: '6 mins'
  },
  {
    id: 'shake-3',
    name: 'Chocolate Milkshake',
    category: 'milkshakes',
    price: 109,
    description: 'Deep chocolate ganache milkshake topped with dark chocolate chips.',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.9,
    isBestseller: true,
    prepTime: '6 mins'
  },
  {
    id: 'shake-4',
    name: 'Vanilla Milkshake',
    category: 'milkshakes',
    price: 109,
    description: 'Madagascar vanilla bean milkshake topped with whipped cream.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.6,
    prepTime: '5 mins'
  },
  {
    id: 'shake-5',
    name: 'Choco Oreo Milkshake',
    category: 'milkshakes',
    price: 119,
    description: 'Crunchy Oreo cookies blended with dark chocolate and ice cream.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.9,
    isBestseller: true,
    prepTime: '7 mins'
  },
  {
    id: 'shake-6',
    name: 'Biscoff Milkshake',
    category: 'milkshakes',
    price: 119,
    description: 'Caramelized Lotus Biscoff spread shake topped with biscoff crumbs.',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.9,
    isChefSpecial: true,
    prepTime: '7 mins'
  },
  {
    id: 'shake-7',
    name: 'Cookies & Cream Milkshake',
    category: 'milkshakes',
    price: 119,
    description: 'Crispy chocolate cookies crushed into vanilla velvet shake.',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.8,
    prepTime: '6 mins'
  },
  {
    id: 'shake-8',
    name: 'Butterscotch Milkshake',
    category: 'milkshakes',
    price: 119,
    description: 'Rich praline butterscotch crunch blended with golden caramel.',
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.7,
    prepTime: '6 mins'
  },
  {
    id: 'shake-9',
    name: 'Blueberry Milkshake',
    category: 'milkshakes',
    price: 129,
    description: 'Wild blueberry compote folded into rich creamy yogurt-milk blend.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.8,
    prepTime: '7 mins'
  },

  // FRAPPES
  {
    id: 'frappe-1',
    name: 'Choco Mocha Frappe',
    category: 'frappes',
    price: 129,
    description: 'Espresso shot, chocolate fudge, crushed ice and whipped cream topping.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.9,
    isBestseller: true,
    prepTime: '6 mins'
  },
  {
    id: 'frappe-2',
    name: 'Choco Brownie Frappe',
    category: 'frappes',
    price: 129,
    description: 'Fudgy chocolate brownie bits blended inside ice-cold espresso frappe.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.9,
    isChefSpecial: true,
    prepTime: '8 mins'
  },
  {
    id: 'frappe-3',
    name: 'Irish Coffee Frappe',
    category: 'frappes',
    price: 139,
    description: 'Non-alcoholic Irish cream flavored cold coffee shake with chocolate curls.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.8,
    prepTime: '7 mins'
  },
  {
    id: 'frappe-4',
    name: 'Hazelnut Frappe',
    category: 'frappes',
    price: 139,
    description: 'Aromatic roasted hazelnut syrup blended with double espresso.',
    image: 'https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&w=600&q=80',
    type: 'beverage',
    rating: 4.9,
    isBestseller: true,
    prepTime: '7 mins'
  },

  // MOMOS
  {
    id: 'momo-1',
    name: 'Veg Fried Momos',
    category: 'momos',
    price: 99,
    description: 'Golden crispy dumplings stuffed with finely minced fresh garden veggies (6 pcs).',
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    isBestseller: true,
    prepTime: '12 mins'
  },
  {
    id: 'momo-2',
    name: 'Paneer Fried Momos',
    category: 'momos',
    price: 109,
    description: 'Crispy momos filled with spiced cottage cheese & coriander (6 pcs).',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    prepTime: '12 mins'
  },
  {
    id: 'momo-3',
    name: 'Chicken Fried Momos',
    category: 'momos',
    price: 119,
    description: 'Crispy fried momos packed with seasoned chicken keema & garlic spicy chutney.',
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80',
    type: 'non-veg',
    rating: 4.9,
    isBestseller: true,
    prepTime: '12 mins'
  },

  // MAGGI
  {
    id: 'maggi-1',
    name: 'Masala Maggi',
    category: 'maggi',
    price: 49,
    description: 'Classic Indian street style yellow noodles tossed with authentic masala.',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.7,
    prepTime: '8 mins'
  },
  {
    id: 'maggi-2',
    name: 'Peri Peri Maggi',
    category: 'maggi',
    price: 59,
    description: 'Fiery Maggi wok-tossed with African peri-peri spices.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    prepTime: '8 mins'
  },
  {
    id: 'maggi-3',
    name: 'Veggie Masala Maggi',
    category: 'maggi',
    price: 69,
    description: 'Loaded with sweetcorn, green peas, capsicum & diced carrots.',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    prepTime: '10 mins'
  },
  {
    id: 'maggi-4',
    name: 'Cheese Masala Maggi',
    category: 'maggi',
    price: 79,
    description: 'Rich Maggi topped with melted Amul mozzarella cheese blend.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.9,
    isBestseller: true,
    prepTime: '10 mins'
  },
  {
    id: 'maggi-5',
    name: 'Cheese Peri Peri Maggi',
    category: 'maggi',
    price: 89,
    description: 'Spicy peri-peri Maggi crowned with gooey melted cheese layer.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.9,
    isChefSpecial: true,
    prepTime: '10 mins'
  },

  // TOASTS
  {
    id: 'toast-1',
    name: 'Cheese Chilli Toast',
    category: 'toasts',
    price: 109,
    description: 'Artisan white bread baked with spicy green chillies and melted cheese.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    isBestseller: true,
    prepTime: '10 mins'
  },
  {
    id: 'toast-2',
    name: 'Cheese Garlic Toast',
    category: 'toasts',
    price: 109,
    description: 'Garlic infused herb butter toasted sourdough with bubbling cheese.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    prepTime: '10 mins'
  },
  {
    id: 'toast-3',
    name: 'Tandoori Veggie Toast',
    category: 'toasts',
    price: 129,
    description: 'Smoky tandoori veggies, bell peppers & paneer cubes baked on toast.',
    image: 'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.7,
    prepTime: '12 mins'
  },
  {
    id: 'toast-4',
    name: 'Chicken Loaded Toast',
    category: 'toasts',
    price: 149,
    description: 'Juicy shredded chicken, jalapenos, cheese & secret Urban sauce.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    type: 'non-veg',
    rating: 4.9,
    isChefSpecial: true,
    prepTime: '12 mins'
  },

  // VEG SNACKS
  {
    id: 'veg-snack-1',
    name: 'Potato Garlic Shots',
    category: 'veg-snacks',
    price: 89,
    description: 'Crispy bite-sized garlic seasoned potato poppers (12 pcs).',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.7,
    prepTime: '10 mins'
  },
  {
    id: 'veg-snack-2',
    name: 'Cheese Corn Pops',
    category: 'veg-snacks',
    price: 99,
    description: 'Golden fried sweetcorn and mozzarella cheese balls.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    isBestseller: true,
    prepTime: '10 mins'
  },
  {
    id: 'veg-snack-3',
    name: 'Salted French Fries',
    category: 'veg-snacks',
    price: 89,
    description: 'Crispy double-fried golden potato cut fries lightly salted.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.6,
    prepTime: '8 mins'
  },
  {
    id: 'veg-snack-4',
    name: 'Peri Peri French Fries',
    category: 'veg-snacks',
    price: 99,
    description: 'Golden french fries tossed liberally with spicy peri peri seasoning.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.9,
    isBestseller: true,
    prepTime: '8 mins'
  },
  {
    id: 'veg-snack-5',
    name: 'Hara Bhara Kebab',
    category: 'veg-snacks',
    price: 119,
    description: 'Healthy spinach, green peas and cashew spiced patties (4 pcs).',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.7,
    prepTime: '12 mins'
  },
  {
    id: 'veg-snack-6',
    name: 'Onion Rings',
    category: 'veg-snacks',
    price: 109,
    description: 'Crispy panko crusted sweet onion rings served with mayo dip.',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.6,
    prepTime: '10 mins'
  },
  {
    id: 'veg-snack-7',
    name: 'Lebanese Falafel Kebab',
    category: 'veg-snacks',
    price: 129,
    description: 'Crispy chickpea herb patties served with creamy hummus.',
    image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    isChefSpecial: true,
    prepTime: '12 mins'
  },
  {
    id: 'veg-snack-8',
    name: 'Veggie Strips',
    category: 'veg-snacks',
    price: 109,
    description: 'Crunchy vegetable strips with mixed herbs and spicy dip.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.6,
    prepTime: '10 mins'
  },
  {
    id: 'veg-snack-9',
    name: 'Loaded Fries',
    category: 'veg-snacks',
    price: 139,
    description: 'Fries drenched in liquid cheddar, jalapenos, olives & chipotle sauce.',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.9,
    isBestseller: true,
    prepTime: '12 mins'
  },

  // NON VEG SNACKS
  {
    id: 'nv-snack-1',
    name: 'Chicken Samosa',
    category: 'non-veg-snacks',
    price: 99,
    description: 'Flaky pastry filled with spiced minced chicken keema (3 pcs).',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    type: 'non-veg',
    rating: 4.8,
    prepTime: '10 mins'
  },
  {
    id: 'nv-snack-2',
    name: 'Chicken Popcorn',
    category: 'non-veg-snacks',
    price: 129,
    description: 'Bite-sized extra crispy seasoned chicken popcorn with spicy mayo dip.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
    type: 'non-veg',
    rating: 4.9,
    isBestseller: true,
    prepTime: '10 mins'
  },
  {
    id: 'nv-snack-3',
    name: 'Chicken Strips with Fries',
    category: 'non-veg-snacks',
    price: 159,
    description: '3 tender fried chicken strips served alongside hot peri peri fries.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
    type: 'non-veg',
    rating: 4.9,
    isChefSpecial: true,
    prepTime: '14 mins'
  },
  {
    id: 'nv-snack-4',
    name: 'Chicken Tenders',
    category: 'non-veg-snacks',
    price: 149,
    description: 'Succulent buttermilk marinated chicken breast fillets breaded & deep fried.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
    type: 'non-veg',
    rating: 4.8,
    prepTime: '12 mins'
  },

  // VEG BURGERS
  {
    id: 'v-burger-1',
    name: 'Veggie Royal Burger',
    category: 'veg-burgers',
    price: 119,
    description: 'Crispy potato-veggie patty, lettuce, tomato, onions & house garlic mayo.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.7,
    prepTime: '12 mins'
  },
  {
    id: 'v-burger-2',
    name: 'Firestorm Peri Burger',
    category: 'veg-burgers',
    price: 129,
    description: 'Spicy pepper patty, jalapenos, fiery peri-peri drizzle & sliced cheese.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    isBestseller: true,
    prepTime: '12 mins'
  },
  {
    id: 'v-burger-3',
    name: 'Desi Tandoori Burger',
    category: 'veg-burgers',
    price: 139,
    description: 'Char-grilled paneer patty drenched in spicy tandoori spread & mint chutney.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.9,
    isChefSpecial: true,
    prepTime: '14 mins'
  },

  // NON VEG BURGERS
  {
    id: 'nv-burger-1',
    name: 'Chickzilla Burger',
    category: 'non-veg-burgers',
    price: 159,
    description: 'Giant fried chicken thigh, spicy sriracha sauce & thousand island dressing.',
    image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80',
    type: 'non-veg',
    rating: 4.9,
    isBestseller: true,
    prepTime: '15 mins'
  },
  {
    id: 'nv-burger-2',
    name: 'Smoky Sultan Burger',
    category: 'non-veg-burgers',
    price: 169,
    description: 'Smoky hickory BBQ chicken patty with caramelized onions & melted cheddar.',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80',
    type: 'non-veg',
    rating: 4.8,
    prepTime: '15 mins'
  },
  {
    id: 'nv-burger-3',
    name: 'Red Heat Burger',
    category: 'non-veg-burgers',
    price: 169,
    description: 'Ghost-pepper infused spicy crisp chicken, habanero mayo & crunchy gherkins.',
    image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80',
    type: 'non-veg',
    rating: 4.8,
    prepTime: '15 mins'
  },
  {
    id: 'nv-burger-4',
    name: 'Crispy Crunch Tender Burger',
    category: 'non-veg-burgers',
    price: 179,
    description: 'Triple fried tenders stacked with crispy slaw, garlic aioli & cheese slice.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    type: 'non-veg',
    rating: 4.9,
    isChefSpecial: true,
    prepTime: '15 mins'
  },

  // SPECIAL BURGERS
  {
    id: 'sp-burger-1',
    name: 'Aafat Veggie Tower',
    category: 'special-burgers',
    price: 199,
    description: 'Double stacked veggie & paneer patties, hashbrown, double cheese & onion rings.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 5.0,
    isChefSpecial: true,
    prepTime: '18 mins'
  },
  {
    id: 'sp-burger-2',
    name: 'Aafat Chicken Tower',
    category: 'special-burgers',
    price: 229,
    description: 'Ultimate monster burger: Double crispy chicken fillet, fried egg, bacon-flavor sauce & triple cheese.',
    image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80',
    type: 'non-veg',
    rating: 5.0,
    isChefSpecial: true,
    isBestseller: true,
    prepTime: '20 mins'
  },

  // SANDWICHES
  {
    id: 'sandwich-1',
    name: 'Bread Butter',
    category: 'sandwiches',
    price: 39,
    description: 'Fresh soft white bread slice layered with rich Amul yellow butter.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.5,
    prepTime: '4 mins'
  },
  {
    id: 'sandwich-2',
    name: 'Grilled Bread Butter',
    category: 'sandwiches',
    price: 49,
    description: 'Crispy butter toasted sandwich slices served warm.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.6,
    prepTime: '5 mins'
  },
  {
    id: 'sandwich-3',
    name: 'Chutney Sandwich',
    category: 'sandwiches',
    price: 59,
    description: 'Classic Mumbai street sandwich with house coriander mint spicy chutney.',
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.7,
    prepTime: '6 mins'
  },
  {
    id: 'sandwich-4',
    name: 'Cheese Chutney Sandwich',
    category: 'sandwiches',
    price: 79,
    description: 'Spicy green chutney loaded with shredded cheese & sandwich masala.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    isBestseller: true,
    prepTime: '7 mins'
  },
  {
    id: 'sandwich-5',
    name: 'Veg Club Sandwich',
    category: 'sandwiches',
    price: 109,
    description: 'Triple decker sandwich with cucumbers, tomatoes, potatoes, cheese & oregano.',
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    prepTime: '10 mins'
  },
  {
    id: 'sandwich-6',
    name: 'Veg Tikka Sandwich',
    category: 'sandwiches',
    price: 119,
    description: 'Smoky paneer tikka chunks, capsicum, mint mayo grilled to perfection.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.9,
    isChefSpecial: true,
    prepTime: '10 mins'
  },

  // PIZZA
  {
    id: 'pizza-1',
    name: 'Margherita',
    category: 'pizza',
    price: 149,
    description: 'Classic tomato basil sauce topped with 100% pure mozzarella cheese.',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    isBestseller: true,
    prepTime: '15 mins'
  },
  {
    id: 'pizza-2',
    name: 'Onion',
    category: 'pizza',
    price: 159,
    description: 'Crunchy red onions over rich cheesy mozzarella pizza base.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.6,
    prepTime: '15 mins'
  },
  {
    id: 'pizza-3',
    name: 'Capsicum',
    category: 'pizza',
    price: 159,
    description: 'Fresh green bell peppers, herb seasoning & stringy cheese.',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.6,
    prepTime: '15 mins'
  },
  {
    id: 'pizza-4',
    name: 'Cheese & Corn',
    category: 'pizza',
    price: 169,
    description: 'Sweet golden corn kernels with double mozzarella cheese layer.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    isBestseller: true,
    prepTime: '15 mins'
  },
  {
    id: 'pizza-5',
    name: 'Jalapenos & Onion',
    category: 'pizza',
    price: 179,
    description: 'Zesty pickled jalapenos & crunchy onions with chili flakes.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.7,
    prepTime: '15 mins'
  },
  {
    id: 'pizza-6',
    name: 'OTC Pizza',
    category: 'pizza',
    price: 189,
    description: 'Onion, Tomato & Capsicum trio on classic Italian sauce.',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    prepTime: '15 mins'
  },
  {
    id: 'pizza-7',
    name: 'Cheese & Olives',
    category: 'pizza',
    price: 199,
    description: 'Sliced black olives, extra virgin olive oil drizzle & melted cheese.',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    prepTime: '15 mins'
  },
  {
    id: 'pizza-8',
    name: 'Paneer Cheese Tandoori',
    category: 'pizza',
    price: 219,
    description: 'Marinated tandoori paneer cubes, capsicum, red paprika & tandoori sauce.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.9,
    isBestseller: true,
    prepTime: '18 mins'
  },
  {
    id: 'pizza-9',
    name: 'Indi Tandoori',
    category: 'pizza',
    price: 219,
    description: 'Desi spiced sauce with paneer, onions, coriander & mint drizzle.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.8,
    prepTime: '18 mins'
  },
  {
    id: 'pizza-10',
    name: 'Veg Supreme',
    category: 'pizza',
    price: 239,
    description: 'Loaded with paneer, olives, corn, capsicum, jalapenos, onions & extra cheese.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.9,
    isChefSpecial: true,
    prepTime: '18 mins'
  },
  {
    id: 'pizza-11',
    name: 'Peri Peri Paneer',
    category: 'pizza',
    price: 229,
    description: 'Spicy peri peri marinated cottage cheese, yellow corn & chili flakes.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    type: 'veg',
    rating: 4.9,
    prepTime: '18 mins'
  }
];
