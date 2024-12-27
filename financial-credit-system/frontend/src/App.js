// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './components/UserDashboard';
import CreditworthinessForm from './components/CreditworthinessForm';
import CreditReport from './components/CreditReport';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Financial Management System</h1>
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/creditworthiness" element={<CreditworthinessForm />} />
          <Route path="/credit-report" element={<CreditReport />} />
          <Route path="/transactions" element={<TransactionList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
