	var net = require('net');

	var server = net.createServer(function(socket) {
		socket.write('OK\r\n');
		socket.pipe(socket);
	});

	server.listen(process.env.PORT || 703, '');
        console.log("MOUSEBTC SERVER RUNNING ON " + process.env.PORT || 703 );
