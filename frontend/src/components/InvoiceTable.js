import React from 'react';

function InvoiceTable({ invoices }) {
  if (!invoices || invoices.length === 0) {
    return <div>No parsed invoices found.</div>;
  }

  return (
    <table border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr>
          <th>Invoice No</th>
          <th>Date</th>
          <th>Airline</th>
          <th>Amount</th>
          <th>GSTIN</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((inv) => (
          <tr key={inv.ticketNumber}>
            <td>{inv.parsedData.invoiceNumber}</td>
            <td>{inv.parsedData.date}</td>
            <td>{inv.parsedData.airline}</td>
            <td>{inv.parsedData.amount}</td>
            <td>{inv.parsedData.gstin}</td>
            <td>{inv.parseStatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InvoiceTable;