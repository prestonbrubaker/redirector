const express = require('express');
const app = express();
const http = require('http');
const port = 80; // Standard HTTP port

const targetPort = 58543; // The port you want to redirect to

app.use((req, res) => {
  const targetUrl = 'http://73.101.217.220:' + targetPort + req.url;
  res.redirect(targetUrl);
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Redirect server running on port ${port}`);
});
