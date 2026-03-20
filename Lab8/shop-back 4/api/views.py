import json
from django.http import JsonResponse
from django.views import View
from .models import Product, Category


def product_to_dict(product):
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': {
            'id': product.category.id,
            'name': product.category.name,
        },
    }


def category_to_dict(category):
    return {
        'id': category.id,
        'name': category.name,
    }


class ProductListView(View):
    """GET /api/products/ — List of all Products"""

    def get(self, request):
        products = Product.objects.select_related('category').all()
        #lim = request.GET.get('lim')
        #if lim:
        #    products = products[:int(lim)]  
        data = [product_to_dict(p) for p in products]
        return JsonResponse(data, safe=False)


class ProductDetailView(View):
    """GET /api/products/<id>/ — Get one Product by ID"""

    def get(self, request, id):
        try:
            product = Product.objects.select_related('category').get(pk=id)
        except Product.DoesNotExist:
            return JsonResponse({'error': 'Product not found'}, status=404)
        return JsonResponse(product_to_dict(product))


class CategoryListView(View):
    """GET /api/categories/ — List of all Categories"""

    def get(self, request):
        categories = Category.objects.all()
        data = [category_to_dict(c) for c in categories]
        return JsonResponse(data, safe=False)


class CategoryDetailView(View):
    """GET /api/categories/<id>/ — Get one Category by ID"""

    def get(self, request, id):
        try:
            category = Category.objects.get(pk=id)
        except Category.DoesNotExist:
            return JsonResponse({'error': 'Category not found'}, status=404)
        return JsonResponse(category_to_dict(category))


class CategoryProductsView(View):
    """GET /api/categories/<id>/products/ — List of Products by Category"""

    def get(self, request, id):
        try:
            category = Category.objects.get(pk=id)
        except Category.DoesNotExist:
            return JsonResponse({'error': 'Category not found'}, status=404)
        products = Product.objects.select_related('category').filter(category=category)
        data = [product_to_dict(p) for p in products]
        return JsonResponse(data, safe=False)
