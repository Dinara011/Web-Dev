from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    """
    ModelViewSet автоматты түрде мына эндпоинттерді жасайды:
      GET    /api/categories/        → list()
      POST   /api/categories/        → create()
      GET    /api/categories/<id>/   → retrieve()
      PUT    /api/categories/<id>/   → update()
      DELETE /api/categories/<id>/   → destroy()
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'], url_path='products')
    def products(self, request, pk=None):
        """
        Қосымша эндпоинт: GET /api/categories/<id>/products/
        detail=True     → <id> бар URL
        methods=['get'] → тек GET
        url_path='products' → URL соңы
        """
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    """
    ModelViewSet автоматты түрде мына эндпоинттерді жасайды:
      GET    /api/products/        → list()
      POST   /api/products/        → create()
      GET    /api/products/<id>/   → retrieve()
      PUT    /api/products/<id>/   → update()
      DELETE /api/products/<id>/   → destroy()
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
