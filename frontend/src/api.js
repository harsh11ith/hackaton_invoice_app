import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/invoices';

export const getPassengers = () => axios.get(`${API_BASE}/passengers`);
export const getInvoices = () => axios.get(API_BASE);
export const downloadInvoice = (ticketNumber) => axios.post(`${API_BASE}/download/${ticketNumber}`);
export const parseInvoice = (ticketNumber) => axios.post(`${API_BASE}/parse/${ticketNumber}`);
export const getParsedInvoices = () => axios.get(`${API_BASE}/parsed`);
export const getSummary = () => axios.get(`${API_BASE}/summary`);
export const getHighValueInvoices = (threshold) => axios.get(`${API_BASE}/high-value?threshold=${threshold}`);