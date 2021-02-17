const http = require('http');

// Create server object
http.createServer((req, res) => {
    // Write a response
    res.writeHead(200, {'content-type': 'text/plain'})
    res.write('Hello world');
    res.end();
}).listen(8000, () => console.log('server is running!...'))