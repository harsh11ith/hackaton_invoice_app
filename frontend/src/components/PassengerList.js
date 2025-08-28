import React, { useEffect, useState } from 'react';
import { getPassengers } from '../api';

function PassengerList() {
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPassengers();
  }, []);

  const fetchPassengers = async () => {
    setLoading(true);
    const res = await getPassengers();
    console.log('Fetched passengers:', res.data);
    setPassengers(res.data);
    setLoading(false);
  };

  if (loading) return <div>Loading passengers...</div>;

  return (
    <div>
      <h3>Passenger List</h3>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Ticket Number</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((p) => (
            <tr key={p.ticketNumber}>
              <td>{p.ticketNumber}</td>
              <td>{p.firstName}</td>
              <td>{p.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PassengerList;