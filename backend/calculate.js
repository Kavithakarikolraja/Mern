// calculator.js
const { createServer } = require('node:http');
const url = require('node:url');

const hostname = '127.0.0.1';
const port = 4000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Parse query parameters from the URL
  const queryObject = url.parse(req.url, true).query;
  const a = parseFloat(queryObject.a);
  const b = parseFloat(queryObject.b);

  if (isNaN(a) || isNaN(b)) {
    res.end("Please provide numbers 'a' and 'b' in the query string, e.g. /?a=10&b=5");
    return;
  }

  const add = a + b;
  const sub = a - b;
  const mul = a * b;
  const div = b !== 0 ? a / b : "Division by zero not allowed";

  res.end(
    `Calculator Results for a=${a}, b=${b}:
Add: ${add}
Sub: ${sub}
Mul: ${mul}
Div: ${div}`
  );
});

server.listen(port, hostname, () => {
  console.log(`Calculator server running at http://${hostname}:${port}/`);
});
