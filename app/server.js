const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.end('Hello from GKE via Helm & GitHub Actions!');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
