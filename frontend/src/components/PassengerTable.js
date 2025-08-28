import React from 'react';

function PassengerTable({ invoices, onDownload, onParse }) {
  if (!invoices || invoices.length === 0) {
    return <div>No passenger records found.</div>;
  }

  return (
    <table border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr>
          <th>Ticket Number</th>
          <th>Name</th>
          <th>Download Status</th>
          <th>Parse Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((inv) => (
          <tr key={inv.ticketNumber}>
            <td>{inv.ticketNumber}</td>
            <td>{inv.firstName} {inv.lastName}</td>
            <td>
              {inv.downloadStatus}
              {inv.downloadStatus === 'Error' && <span style={{ color: 'red' }}> &#9888;</span>}
            </td>
            <td>
              {inv.parseStatus}
              {inv.parseStatus === 'Error' && <span style={{ color: 'red' }}> &#9888;</span>}
            </td>
            <td>
              <button disabled={inv.downloadStatus === 'Success'} onClick={() => onDownload(inv.ticketNumber)}>
                Download
              </button>
              <button
                disabled={inv.downloadStatus !== 'Success' || inv.parseStatus === 'Success'}
                onClick={() => onParse(inv.ticketNumber)}
              >
                Parse
              </button>
              {inv.pdfPath && (
                <a href={`http://localhost:5000${inv.pdfPath}`} target="_blank" rel="noopener noreferrer">PDF</a>
              )}
              <input type="checkbox" title="Flag for Review" style={{ marginLeft: 8 }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PassengerTable;