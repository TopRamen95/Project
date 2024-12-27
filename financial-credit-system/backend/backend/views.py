# backend/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Transaction
from .serializers import TransactionSerializer


class TransactionList(APIView):
    def get(self, request):
        transactions = Transaction.objects.all()  # or filter by user, etc.
        serializer = TransactionSerializer(transactions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
