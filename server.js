require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Use Render's dynamically assigned port
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Backend is live on Render!');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Test API is working!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
