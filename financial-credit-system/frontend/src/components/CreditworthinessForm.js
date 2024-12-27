// frontend/src/components/CreditworthinessForm.js
import React, { useState } from 'react';

const CreditworthinessForm = () => {
  const [formData, setFormData] = useState({
    income: '',
    debts: '',
    outstandingLoans: '',
  });
  const [assessmentResult, setAssessmentResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/assess-creditworthiness/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setAssessmentResult(result);
    } catch (error) {
      console.error('Error assessing creditworthiness:', error);
    }
  };

  return (
    <div>
      <h2>Creditworthiness Assessment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Income: </label>
          <input
            type="number"
            name="income"
            value={formData.income}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Debts: </label>
          <input
            type="number"
            name="debts"
            value={formData.debts}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Outstanding Loans: </label>
          <input
            type="number"
            name="outstandingLoans"
            value={formData.outstandingLoans}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Assess Creditworthiness</button>
      </form>

      {assessmentResult && (
        <div>
          <h3>Assessment Result:</h3>
          <p>{assessmentResult}</p>
        </div>
      )}
    </div>
  );
};

export default CreditworthinessForm;
