var http = require("http");

// Console will print the message
var port = process.env.PORT || 1337;

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(port);


console.log("Server running at http://localhost:%d", port);