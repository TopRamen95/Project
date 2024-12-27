from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, TransactionViewSet, CreditReportViewSet, RiskAssessmentViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'transactions', TransactionViewSet)
router.register(r'credit-reports', CreditReportViewSet)
router.register(r'risk-assessments', RiskAssessmentViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
