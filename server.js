const express = require('express');
const app = express();
const port = 80; // Standard HTTP port

app.get('*', (req, res) => {
  res.redirect('http://73.101.217.220:58543' + req.url);
});

app.listen(port, () => {
  console.log(`Redirection server running on port ${port}`);
});
