import React, { useEffect, useState } from 'react';
import PassengerTable from './components/PassengerTable';
import ParsedInvoices from './components/ParsedInvoices';
import SummaryView from './components/SummaryView';
import HighValueInvoices from './components/HighValueInvoices';
import { getInvoices, downloadInvoice, parseInvoice } from './api';
import PassengerList from './components/PassengerList';

function App() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    setLoading(true);
    const res = await getInvoices();
    setInvoices(res.data);
    setLoading(false);
  };

  const handleDownload = async (ticketNumber) => {
    setLoading(true);
    await downloadInvoice(ticketNumber);
    await fetchInvoices();
    setLoading(false);
  };

  const handleParse = async (ticketNumber) => {
    setLoading(true);
    await parseInvoice(ticketNumber);
    await fetchInvoices();
    setLoading(false);
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Passenger Invoices Dashboard</h2>
      <PassengerList/>
      {loading && <div>Loading...</div>}
      <PassengerTable invoices={invoices} onDownload={handleDownload} onParse={handleParse} />
      <h3 style={{ marginTop: 32 }}>Parsed Invoices</h3>
      <ParsedInvoices />
      <SummaryView />
      <HighValueInvoices />
    </div>
  );
}

export default App;