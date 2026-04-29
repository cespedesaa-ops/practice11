const express = require('express');
const app = express();
const greeting = process.env.GREETING || 'Hello!';

app.get('/api/message', (req, res) => {
  res.json({ message: '{"Hello from Render!"}' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
