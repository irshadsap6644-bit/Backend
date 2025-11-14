const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Simple API Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Your invoice API will go here later
// Example:
app.post("/api/invoice", (req, res) => {
  const data = req.body;
  res.json({ message: "Invoice received", data });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
