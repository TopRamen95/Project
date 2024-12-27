# backend/models.py
from django.db import models

class Transaction(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    # Other fields for the Transaction model

    def __str__(self):
        return f"Transaction {self.id} for user {self.user}"
