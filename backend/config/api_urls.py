from django.urls import include, path

urlpatterns = [
    path('', include('portfolio.urls')),
    path('', include('contact.urls')),
    path('', include('blog.urls')),
]


