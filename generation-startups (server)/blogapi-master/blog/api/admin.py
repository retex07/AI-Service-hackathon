from django.contrib import admin
from .models import Generation, P, Post, Comment, Category

admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Category)
admin.site.register(Generation)
admin.site.register(P)

