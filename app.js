//BUILT IN MODULES
// HTTP MODULE
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("About page");
    return;
  }

  //if use ask an introuvable page

  res.end(`
  <h1>Ooops!!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">Back to home page</a>
  `);
});
server.listen(5004);
