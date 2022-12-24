const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.write(req.url)
    res.end();
  })
  .listen(8080, () => {
    console.log("server running at http://localhost:8080");
  });