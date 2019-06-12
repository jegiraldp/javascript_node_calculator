var http = require('http');

var s = http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Hello\n');
});

s.listen(3000);

console.log('Server running on http://localhost:8080/');
