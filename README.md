# 📑 Invoice Automation App

A full-stack application that automates **downloading airline invoices**, **parsing details**, and providing **summary analytics**.  
This project was developed as an **assignment given by Finkraft company**.

---

## ✨ Features
- 📄 **Invoice Parsing** → Extracts structured data (invoice number, date, GST, airline, amount, etc.).
- 📊 **Invoice Dashboard** → Clean React-based UI to view parsed invoices.
- 📑 **Summary Reports** → Aggregated reports by airline and amount.
- ⚡ **High-value Invoice Filtering** → Easily filter invoices above a configurable threshold.

---

## 🛠 Tech Stack
- **Frontend**: React.js  
- **Backend**: Node.js (Express)  
- **Other Tools**: Axios, Nodemon, File Parsing Libraries

---

## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/harsh11ith/invoice_app.git
cd invoice_app

### 2. Setup Backend
cd backend
npm install
npm start   # or nodemon server.js (if installed)

### 3. Setup Frontend
cd ../frontend
npm install
npm start

## 📡 API Endpoints

| Endpoint                      | Method | Description                                      |
| ----------------------------- | ------ | ------------------------------------------------ |
| `/`                           | GET    | Get all invoices                                 |
| `/download/:ticketNumber`     | POST   | Download invoice (requires first/last name)      |
| `/parse/:ticketNumber`        | POST   | Parse a downloaded invoice                       |
| `/parsed`                     | GET    | Get all parsed invoices                          |
| `/summary`                    | GET    | Get summary by airline                           |
| `/high-value?threshold=10000` | GET    | Get invoices above a given threshold             |


## 📌 Notes

### 📝 Developed as part of a Finkraft assignment.

### ⚙️ Designed for scalability and modularity — backend and frontend run independently.

### 🔒 Can be extended with authentication, database integration, and advanced reporting features.
