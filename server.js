require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Backend is live on Render!');
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Test API is working!' });
});

// Today's sales
app.get('/api/sales-today', (req, res) => {
  res.json({ sales: 12450 });
});

// Total bills
app.get('/api/total-bills', (req, res) => {
  res.json({ bills: 46 });
});

// Total customers
app.get('/api/total-customers', (req, res) => {
  res.json({ customers: 18 });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
