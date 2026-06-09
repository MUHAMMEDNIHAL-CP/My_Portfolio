from django.urls import path

from .views import ContactCreateView

# Some environments end up importing ContactCreateView as a function instead of a class.
# Support both shapes so Django can boot.
view_callable = (
    ContactCreateView.as_view() if hasattr(ContactCreateView, "as_view") else ContactCreateView
)

urlpatterns = [
    path('contact/', view_callable, name='contact-create'),
]










