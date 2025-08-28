import React, { useEffect, useState } from 'react';
import { getSummary } from '../api';

function SummaryView() {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    getSummary().then(res => setSummary(res.data));
  }, []);

  return (
    <div style={{ marginTop: 32 }}>
      <h3>Airline-wise Summary</h3>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Airline</th>
            <th>Invoice Count</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(summary).map(([airline, data]) => (
            <tr key={airline}>
              <td>{airline}</td>
              <td>{data.count}</td>
              <td>{data.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SummaryView;