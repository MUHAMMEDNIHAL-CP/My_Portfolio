"""Temporary debug module for resolving ContactCreateView import issues."""

from importlib import import_module

m = import_module("contact.views")
print("views.ContactCreateView =", getattr(m, "ContactCreateView", None))
print("type =", type(getattr(m, "ContactCreateView", None)))


