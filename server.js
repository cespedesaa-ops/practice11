const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from your first Express API!' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});