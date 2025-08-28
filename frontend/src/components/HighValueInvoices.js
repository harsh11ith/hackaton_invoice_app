import React, { useEffect, useState } from 'react';
import { getHighValueInvoices } from '../api';
import InvoiceTable from './InvoiceTable';

function HighValueInvoices() {
  const [threshold, setThreshold] = useState(10000);
  const [highValue, setHighValue] = useState([]);

  const fetchHighValue = () => {
    getHighValueInvoices(threshold).then(res => setHighValue(res.data));
  };

  useEffect(() => {
    fetchHighValue();
  }, []);

  return (
    <div style={{ marginTop: 32 }}>
      <h3>High-Value Invoices (Above {threshold})</h3>
      <input
        type="number"
        value={threshold}
        onChange={e => setThreshold(Number(e.target.value))}
        style={{ marginRight: 8 }}
      />
      <button onClick={fetchHighValue}>Filter</button>
      <InvoiceTable invoices={highValue} />
    </div>
  );
}

export default HighValueInvoices;