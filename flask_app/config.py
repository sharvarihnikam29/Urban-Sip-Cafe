import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    MYSQL_HOST = os.getenv('MYSQL_HOST', 'localhost')
    MYSQL_USER = os.getenv('MYSQL_USER', 'root')
    MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD', 'password')
    MYSQL_DB = os.getenv('MYSQL_DB', 'urbansip_db')
    MYSQL_PORT = int(os.getenv('MYSQL_PORT', 3306))
    SECRET_KEY = os.getenv('SECRET_KEY', 'urbansip-secret-key-2026')
