from rest_framework import serializers
from .models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    """
    Category моделін JSON-ға айналдырады.
    ModelSerializer өрістерді автоматты анықтайды.
    """
    class Meta:
        model = Category        # қай модель
        fields = '__all__'      # барлық өрістер: id, name


class ProductSerializer(serializers.ModelSerializer):
    """
    Product моделін JSON-ға айналдырады.
    category өрісі id болып шығады (ForeignKey).
    """
    class Meta:
        model = Product
        fields = '__all__'      # id, name, price, description, count, is_active, category
