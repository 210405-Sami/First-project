const express = require("express");
const app = express();
const PORT = 5000;

// Simple route
app.get("/", (req, res) => {
  res.send("QuickMed backend is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
