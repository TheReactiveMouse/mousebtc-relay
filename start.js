var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('OK\r\n');
	socket.pipe(socket);
});

server.listen(1337, '0.0.0.0');

const http = require("http");
 
http.createServer(function(request, response){
     
    response.end("Hello world!");
}).listen(80);
