import React, { useEffect, useState } from 'react';
import InvoiceTable from './InvoiceTable';
import { getParsedInvoices } from '../api';

function ParsedInvoices() {
  const [parsed, setParsed] = useState([]);

  useEffect(() => {
    getParsedInvoices().then(res => setParsed(res.data));
  }, []);

  return <InvoiceTable invoices={parsed} />;
}

export default ParsedInvoices;