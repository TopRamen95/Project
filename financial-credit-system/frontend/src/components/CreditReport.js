// frontend/src/components/CreditReport.js
import React, { useEffect, useState } from 'react';

const CreditReport = () => {
  const [creditReport, setCreditReport] = useState(null);

  useEffect(() => {
    const fetchCreditReport = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/credit-report/');
        const data = await response.json();
        setCreditReport(data);
      } catch (error) {
        console.error('Error fetching credit report:', error);
      }
    };
    fetchCreditReport();
  }, []);

  return (
    <div>
      <h2>Credit Report</h2>
      {creditReport ? (
        <pre>{JSON.stringify(creditReport, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CreditReport;
