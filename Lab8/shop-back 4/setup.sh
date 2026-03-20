#!/bin/bash
echo "=== Shop-Back Setup ==="

echo "[1/4] Creating virtual environment..."
python3 -m venv venv

echo "[2/4] Installing Django..."
source venv/bin/activate
pip install -r requirements.txt

echo "[3/4] Running migrations..."
python manage.py migrate

echo "[4/4] Loading sample data (5 categories, 25 products)..."
python manage.py loaddata api/fixtures/initial_data.json

echo ""
echo "✅ Done! Run the server with:"
echo "   source venv/bin/activate"
echo "   python manage.py runserver"
