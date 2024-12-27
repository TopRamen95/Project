from rest_framework import viewsets
from .models import User, Transaction, CreditReport, RiskAssessment
from ..backend.serializers import UserSerializer, TransactionSerializer, CreditReportSerializer, RiskAssessmentSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

class CreditReportViewSet(viewsets.ModelViewSet):
    queryset = CreditReport.objects.all()
    serializer_class = CreditReportSerializer

class RiskAssessmentViewSet(viewsets.ModelViewSet):
    queryset = RiskAssessment.objects.all()
    serializer_class = RiskAssessmentSerializer
