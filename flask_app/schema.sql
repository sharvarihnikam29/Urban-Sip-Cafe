-- Urban Sip Cafe MySQL Database Schema

CREATE DATABASE IF NOT EXISTS urbansip_db;
USE urbansip_db;

-- 1. Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    icon VARCHAR(50)
);

-- 2. Menu Items Table
CREATE TABLE IF NOT EXISTS menu_items (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category_id VARCHAR(50),
    image TEXT,
    is_veg BOOLEAN DEFAULT TRUE,
    is_bestseller BOOLEAN DEFAULT FALSE,
    rating DECIMAL(2,1) DEFAULT 4.5,
    prep_time VARCHAR(20) DEFAULT '10-15 min',
    tags VARCHAR(255),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- 3. Reservations Table
CREATE TABLE IF NOT EXISTS reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    guest_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    guests_count INT NOT NULL DEFAULT 2,
    reservation_date DATE NOT NULL,
    reservation_time VARCHAR(20) NOT NULL,
    seating_area VARCHAR(50) DEFAULT 'indoor',
    special_request TEXT,
    status VARCHAR(20) DEFAULT 'confirmed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Orders Table
CREATE TABLE IF NOT EXISTS orders (
    order_id VARCHAR(50) PRIMARY KEY,
    order_type ENUM('dine-in', 'takeaway', 'delivery') NOT NULL DEFAULT 'dine-in',
    table_number VARCHAR(20),
    delivery_address TEXT,
    payment_method VARCHAR(30) DEFAULT 'upi',
    subtotal DECIMAL(10,2) NOT NULL,
    discount DECIMAL(10,2) DEFAULT 0.00,
    tax DECIMAL(10,2) NOT NULL,
    grand_total DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'received',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Order Items Table
CREATE TABLE IF NOT EXISTS order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(50),
    menu_item_id VARCHAR(50),
    quantity INT NOT NULL DEFAULT 1,
    unit_price DECIMAL(10,2) NOT NULL,
    customization TEXT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id) ON DELETE SET NULL
);

-- 6. Customer Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(100),
    rating INT NOT NULL DEFAULT 5,
    comment TEXT NOT NULL,
    favorite_item VARCHAR(100),
    avatar TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Seed Data
INSERT INTO categories (id, name, icon) VALUES
('hot-beverages', 'Hot Beverages', 'Coffee'),
('shakes-frappes', 'Milkshakes & Frappes', 'Sparkles'),
('momos-snacks', 'Crispy Momos & Snacks', 'Utensils'),
('maggi-fastfood', 'Cheese Maggi & Fast Food', 'Flame'),
('burgers-pizzas', 'Gourmet Burgers & Pizzas', 'Sparkles')
ON DUPLICATE KEY UPDATE name=VALUES(name);

INSERT INTO menu_items (id, name, description, price, category_id, image, is_veg, is_bestseller, rating, prep_time, tags) VALUES
('m1', 'Hot Chocolate', 'Rich Belgian cocoa infused with steaming milk and topped with dark chocolate shavings.', 49, 'hot-beverages', 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80', TRUE, TRUE, 4.9, '5-7 min', 'Best Seller,Comfort'),
('m2', 'Artisanal Cappuccino', 'Double shot of single-origin Indian Arabica espresso with micro-foamed steamed milk.', 69, 'hot-beverages', 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80', TRUE, FALSE, 4.8, '5 min', 'Classic,Espresso'),
('m3', 'Biscoff Thick Milkshake', 'Creamy whole milk blended with authentic Lotus Biscoff spread and crushed cookie pieces.', 119, 'shakes-frappes', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80', TRUE, TRUE, 4.9, '8-10 min', 'Trending,Decadent'),
('m4', 'Cheese Peri Peri Maggi', 'Classic Maggi noodles tossed in spicy African Peri Peri seasoning, melted mozzarella & sweet corn.', 79, 'maggi-fastfood', 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80', TRUE, TRUE, 4.9, '10 min', 'Spicy,Cheese'),
('m5', 'Kurkure Paneer Momos (6 pcs)', 'Juicy paneer dumplings wrapped in crunchy Kurkure batter, served with spicy schezwan dip.', 99, 'momos-snacks', 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=800&q=80', TRUE, TRUE, 4.8, '12-15 min', 'Crunchy,Bestseller')
ON DUPLICATE KEY UPDATE name=VALUES(name);
