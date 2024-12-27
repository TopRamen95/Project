from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='transactions')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=255)

    def __str__(self):
        return f"Transaction by {self.user} on {self.date}"

class CreditReport(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='credit_reports')
    score = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Credit report for {self.user} on {self.date}"

class RiskAssessment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='risk_assessments')
    score = models.IntegerField()
    report = models.TextField()

    def __str__(self):
        return f"Risk assessment for {self.user} on {self.date}"
