export type PageType =
  | 'home'
  | 'about'
  | 'menu'
  | 'special'
  | 'gallery'
  | 'reviews'
  | 'reservation'
  | 'contact';

export type FoodType = 'veg' | 'non-veg' | 'beverage';

export type CategoryId =
  | 'hot-beverages'
  | 'cold-beverages'
  | 'milkshakes'
  | 'frappes'
  | 'momos'
  | 'maggi'
  | 'toasts'
  | 'veg-snacks'
  | 'non-veg-snacks'
  | 'veg-burgers'
  | 'non-veg-burgers'
  | 'special-burgers'
  | 'sandwiches'
  | 'pizza';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  description: string;
  image: string;
  type: FoodType;
  isBestseller?: boolean;
  isNew?: boolean;
  isChefSpecial?: boolean;
  rating: number;
  calories?: string;
  prepTime?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  customization?: {
    milk?: string;
    sugar?: string;
    addCheese?: boolean;
    extraShot?: boolean;
    notes?: string;
  };
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  code: string;
  discount: string;
  description: string;
  badge: string;
  image: string;
  validUntil: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  favoriteItem?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'coffee' | 'interior' | 'food' | 'customers';
  image: string;
  caption: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  seatingArea: 'indoor' | 'outdoor-garden' | 'window-booth' | 'private-lounge';
  specialRequest?: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
}
