from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Product, Category




def products_list(request):
    
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    data = {
        'products': products_json,
    }
    return JsonResponse(data)

def product_details(request, product_id):
    try:
        product = Product.objects.get(id = product_id).to_json()
    except Product.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })
    return JsonResponse(product)


def categories_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]

    return JsonResponse(categories_json, safe=False)


def category_details(request, category_id):
    try:
        category = Category.objects.get(id = category_id)
        data = {
            'category': category.to_json(),
            'productsCount': Product.objects.filter(category=category).count()
        }
    except Category.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })
    return JsonResponse(data)

def category_products(request, category_id):
    try:
        category = Category.objects.get(id = category_id)
        products = Product.objects.filter(category = category)
        data = {
            'category': category.to_json(),
            'products': [product.to_json() for product in products],
        }
    except Category.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })
    return JsonResponse(data)