# Urban Sip Cafe — Python + Flask + MySQL Backend Guide

This folder contains the complete, production-ready **Python Flask API** and **MySQL database schema** for Urban Sip Cafe.

---

## 🚀 Quick Setup Instructions

### 1. Prerequisites
- **Python 3.9+** installed
- **MySQL Server** installed and running locally or on a cloud instance (AWS RDS, GCP Cloud SQL, or DigitalOcean Managed Database)

---

### 2. Database Setup (MySQL)
1. Open your MySQL terminal or MySQL Workbench.
2. Import the schema script:
   ```bash
   mysql -u root -p < schema.sql
   ```
3. This creates the `urbansip_db` database, table structures (`categories`, `menu_items`, `reservations`, `orders`, `order_items`, `reviews`, `contact_messages`), and populates initial menu items.

---

### 3. Environment Variables (.env)
Create a `.env` file inside the `flask_app` folder:
```env
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_mysql_password
MYSQL_DB=urbansip_db
MYSQL_PORT=3306
SECRET_KEY=urbansip-super-secret-key
PORT=5000
```

---

### 4. Install Dependencies & Run Flask Server

```bash
# Navigate to flask_app directory
cd flask_app

# Create a virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install required packages
pip install -r requirements.txt

# Run the Flask development server
python app.py
```

The Flask server will run on `http://localhost:5000`.

---

## 📡 Available API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | API Health Check |
| `GET` | `/api/menu` | Fetch all menu items or filter by category (`?category=hot-beverages`) |
| `POST` | `/api/reservations` | Reserve a table (saves to MySQL `reservations` table) |
| `POST` | `/api/orders` | Place a new order with cart items (saves to MySQL `orders` & `order_items`) |
| `POST` | `/api/contact` | Submit contact form message (saves to MySQL `contact_messages`) |

---

## 🎨 HTML/CSS/JS + Flask Frontend Architecture

If you wish to serve static HTML, CSS, and JS files directly through Flask:
1. Place your HTML files in a `templates/` folder (e.g. `templates/index.html`).
2. Place your CSS, JavaScript, and images in a `static/` folder (e.g. `static/css/style.css`, `static/js/main.js`).
3. Render the page from `app.py`:
   ```python
   @app.route('/')
   def index():
       return render_template('index.html')
   ```
