// src/components/UserDashboard.js
import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../axios';  // Correct import path

const UserDashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    getTransactions();
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>{transaction.details}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
