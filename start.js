var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 80));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
	var net = require('net');

	var server = net.createServer(function(socket) {
		socket.write('OK\r\n');
		socket.pipe(socket);
	});

	server.listen(703, '0.0.0.0');
});
