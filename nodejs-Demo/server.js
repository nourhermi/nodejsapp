const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'views' directory
app.use(express.static(path.join(__dirname, 'views')));

// Handle the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/css', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

