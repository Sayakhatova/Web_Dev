from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token

from api.views import VacancyListAPIView, VacancyDetailAPIVIEW, VacancyTopTenAPIView, company_list, company_detail, company_vacancy

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIVIEW.as_view()),
    path('vacancies/top_ten/', VacancyTopTenAPIView.as_view()),

    path('companies/', company_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies/', company_vacancy)
]