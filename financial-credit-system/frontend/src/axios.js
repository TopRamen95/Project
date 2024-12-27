// frontend/src/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/', // backend API URL
  timeout: 5000,
});

export const fetchTransactions = async () => {
  try {
    const response = await api.get('/api/transactions/');
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};
