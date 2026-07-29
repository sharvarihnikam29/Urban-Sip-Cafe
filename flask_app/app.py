import os
import pymysql
from flask import Flask, request, jsonify
from flask_cors import CORS
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

# Database Connection Helper
def get_db_connection():
    return pymysql.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD'],
        database=app.config['MYSQL_DB'],
        port=app.config['MYSQL_PORT'],
        cursorclass=pymysql.cursors.DictCursor,
        autocommit=True
    )

# Health Check Route
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "ok", "service": "Urban Sip Cafe Python Flask API", "version": "1.0"})

# 1. Get All Menu Items with Optional Category Filter
@app.route('/api/menu', methods=['GET'])
def get_menu():
    category = request.args.get('category', 'all')
    try:
        conn = get_db_connection()
        with conn.cursor() as cursor:
            if category != 'all':
                sql = "SELECT * FROM menu_items WHERE category_id = %s"
                cursor.execute(sql, (category,))
            else:
                sql = "SELECT * FROM menu_items"
                cursor.execute(sql)
            items = cursor.fetchall()
            
            # Format types
            for item in items:
                item['price'] = float(item['price'])
                item['rating'] = float(item['rating'])
                item['isVeg'] = bool(item['is_veg'])
                item['isBestseller'] = bool(item['is_bestseller'])
                item['prepTime'] = item['prep_time']
                item['tags'] = item['tags'].split(',') if item['tags'] else []
        conn.close()
        return jsonify({"success": True, "data": items})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

# 2. Table Reservation Route
@app.route('/api/reservations', methods=['POST'])
def create_reservation():
    data = request.json or {}
    guest_name = data.get('name')
    phone = data.get('phone')
    email = data.get('email', '')
    guests_count = data.get('guests', 2)
    reservation_date = data.get('date')
    reservation_time = data.get('time')
    seating_area = data.get('seatingArea', 'indoor')
    special_request = data.get('specialRequest', '')

    if not guest_name or not phone or not reservation_date or not reservation_time:
        return jsonify({"success": False, "error": "Missing required fields (name, phone, date, time)"}), 400

    try:
        conn = get_db_connection()
        with conn.cursor() as cursor:
            sql = """
                INSERT INTO reservations 
                (guest_name, phone, email, guests_count, reservation_date, reservation_time, seating_area, special_request)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            """
            cursor.execute(sql, (guest_name, phone, email, guests_count, reservation_date, reservation_time, seating_area, special_request))
            reservation_id = cursor.lastrowid
        conn.close()

        return jsonify({
            "success": True,
            "message": "Table reservation confirmed!",
            "reservationId": reservation_id
        }), 201
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

# 3. Create Order Route
@app.route('/api/orders', methods=['POST'])
def place_order():
    data = request.json or {}
    order_id = data.get('orderId')
    order_type = data.get('orderType', 'dine-in')
    table_number = data.get('tableNumber', '')
    delivery_address = data.get('deliveryAddress', '')
    payment_method = data.get('paymentMethod', 'upi')
    subtotal = data.get('subtotal', 0)
    discount = data.get('discount', 0)
    tax = data.get('tax', 0)
    grand_total = data.get('grandTotal', 0)
    items = data.get('items', [])

    if not order_id or not items:
        return jsonify({"success": False, "error": "Invalid order details"}), 400

    try:
        conn = get_db_connection()
        with conn.cursor() as cursor:
            # Insert main order
            sql_order = """
                INSERT INTO orders 
                (order_id, order_type, table_number, delivery_address, payment_method, subtotal, discount, tax, grand_total)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            cursor.execute(sql_order, (order_id, order_type, table_number, delivery_address, payment_method, subtotal, discount, tax, grand_total))

            # Insert order items
            sql_item = """
                INSERT INTO order_items (order_id, menu_item_id, quantity, unit_price, customization)
                VALUES (%s, %s, %s, %s, %s)
            """
            for item in items:
                cursor.execute(sql_item, (
                    order_id,
                    item.get('itemId'),
                    item.get('quantity', 1),
                    item.get('unitPrice', 0),
                    str(item.get('customization', {}))
                ))
        conn.close()

        return jsonify({
            "success": True,
            "message": "Order placed successfully!",
            "orderId": order_id
        }), 201
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

# 4. Contact Message Route
@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.json or {}
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject', '')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({"success": False, "error": "Name, email, and message are required."}), 400

    try:
        conn = get_db_connection()
        with conn.cursor() as cursor:
            sql = "INSERT INTO contact_messages (name, email, subject, message) VALUES (%s, %s, %s, %s)"
            cursor.execute(sql, (name, email, subject, message))
        conn.close()

        return jsonify({"success": True, "message": "Thank you for contacting Urban Sip Cafe!"}), 201
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
