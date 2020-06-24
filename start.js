	var net = require('net');

	var server = net.createServer(function(socket) {
		socket.write('OK\r\n');
		socket.pipe(socket);
	});

	server.listen(process.env.PORT || 703, '0.0.0.0');
