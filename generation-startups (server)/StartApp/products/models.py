from django.conf import settings
from django.db import models
from django.utils import timezone

class Product(models.Model):
    text = models.TextField()

    def __str__(self):
        return f'Продукт: {self.text}'
