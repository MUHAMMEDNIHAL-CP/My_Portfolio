from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from django.views.static import serve
from pathlib import Path


FRONTEND_DIST_DIR = Path(__file__).resolve().parent.parent.parent / 'frontend' / 'dist'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('config.api_urls')),

    # Serve the React SPA shell so the homepage ("/") doesn't 404.
    path('', lambda request: serve(request, 'index.html', document_root=str(FRONTEND_DIST_DIR)), name='home'),
    path('<path:subpath>', lambda request, subpath: serve(request, 'index.html', document_root=str(FRONTEND_DIST_DIR))),
]










