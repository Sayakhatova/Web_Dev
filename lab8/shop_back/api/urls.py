from django.urls import path
from . import views

urlpatterns = [
    path('products', views.products_list, name='All products'),
    path('products/<int:product_id>', views.product_details, name='Product details'),
    path('categories', views.categories_list, name='All categories'),
    path('categories/<int:category_id>', views.category_details, name='Category details'),
    path('categories/<int:category_id>/products', views.category_products, name='Category products')

]