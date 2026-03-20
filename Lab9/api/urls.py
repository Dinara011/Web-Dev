from rest_framework.routers import DefaultRouter
from . import views

# DefaultRouter автоматты барлық CRUD URL жасайды
router = DefaultRouter()
router.register('categories', views.CategoryViewSet)  # /api/categories/
router.register('products', views.ProductViewSet)     # /api/products/

urlpatterns = router.urls
