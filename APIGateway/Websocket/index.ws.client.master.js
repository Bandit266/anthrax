var WebSocketClient = require('websocket').client;
//CLIENT MASTER CLIENT WEBSOCKET
const ClientWSMaster = () => {
	var client = new WebSocketClient();
client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});
client.on('connect', function(connection) {
    console.log('WebSocket MASTER Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }
    });
    function sendNumber() {
        if (connection.connected) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            connection.sendUTF(number.toString());
			console.log(`-- ### MASTER STREAM ###, sent: ${number.toString()} with 3sec`);
            setTimeout(sendNumber, 3000);
        }
    }
    sendNumber();
});
client.connect('ws://localhost:8081/', 'echo-protocol');
}


module.exports = {
    ClientWSMaster
}




////////////////////////////////////////////////////////////////////////////




//CLIENT CLIENT WEBSOCKET
// const Client = () => {
// 	var client = new WebSocketClient();
// client.on('connectFailed', function(error) {
//     console.log('Connect Error: ' + error.toString());
// });
// client.on('connect', function(connection) {
//     console.log('WebSocket Client Connected');
//     connection.on('error', function(error) {
//         console.log("Connection Error: " + error.toString());
//     });
//     connection.on('close', function() {
//         console.log('echo-protocol Connection Closed');
//     });
//     connection.on('message', function(message) {
//         if (message.type === 'utf8') {
//             console.log("Received: '" + message.utf8Data + "'");
//         }
//     });
//     function sendNumber() {
//         if (connection.connected) {
//             var number = Math.round(Math.random() * 0xFFFFFF);
//             connection.sendUTF(number.toString());
// 			console.log(`CLIENT STREAM, sent: ${number.toString()} with 5sec`);
//             setTimeout(sendNumber, 5000);
//         }
//     }
//     sendNumber();
// });
// client.connect('ws://localhost:8080/', 'echo-protocol');
// }



// const getName = () => {
// 	return 'Jim';
//   };
  
//   exports.getName = getName;

//get ../websocket/index.ws.js <--
//post (forward) restricted data to the gateway <--

// function WSClientMaster() {
// 	var server = http.createServer(function(request, response) {
// 		console.log((new Date()) + ' Received request for ' + request.url);
// 		response.writeHead(404);
// 		response.end();
// 	});
// 	server.listen(8081, function() {
// 		console.log((new Date()) + ' Server is listening on port 8081');
// 	});
	
// 	wsServer = new WebSocketServer({
// 		httpServer: server,
// 		// You should not use autoAcceptConnections for production
// 		// applications, as it defeats all standard cross-origin protection
// 		// facilities built into the protocol and the browser.  You should
// 		// *always* verify the connection's origin and decide whether or not
// 		// to accept it.
// 		autoAcceptConnections: false
// 	});
	
// 	function originIsAllowed(origin) {
// 	  // put logic here to detect whether the specified origin is allowed.
// 	  return true;
// 	}
	
// 	wsServer.on('request', function(request) {
// 		if (!originIsAllowed(request.origin)) {
// 		  // Make sure we only accept requests from an allowed origin
// 		  request.reject();
// 		  console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
// 		  return;
// 		}
		
// 		var connection = request.accept('echo-protocol', request.origin);
// 		console.log((new Date()) + ' Connection accepted.');
// 		connection.on('message', function(message) {
// 			if (message.type === 'utf8') {
// 				console.log('Received Message: ' + message.utf8Data);
// 				connection.sendUTF(message.utf8Data);
// 				console.log('Sent Message: ' + message.utf8Data);
// 			}
// 			else if (message.type === 'binary') {
// 				console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
// 				connection.sendBytes(message.binaryData);
// 			}
// 		});
// 		connection.on('close', function(reasonCode, description) {
// 			console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
// 		});
// 	});
// 	}
// 	WSClientMaster()

// var WebSocketClient = require('websocket').client;
// const wsclient = new WebSocketClient();


// // function WSClient() {
	
// 	wsclient.on('connectFailed', function(error) {
// 		console.log('Connect Error: ' + error.toString());
// 	});
	
// 	wsclient.on('connect', function(connection) {
// 		console.log('WebSocket Client Connected');
// 		connection.on('error', function(error) {
// 			console.log("Connection Error: " + error.toString());
// 		});
// 		connection.on('close', function() {
// 			console.log('echo-protocol Connection Closed');
// 		});
// 		connection.on('message', function(message) {
// 			if (message.type === 'utf8') {
// 				console.log("Received: '" + message.utf8Data + "'");
// 			}
// 		});
		
// 		function sendNumber() {
// 			if (connection.connected) {
// 				var number = Math.round(Math.random() * 0xFFFFFF);
// 				connection.sendUTF(number.toString());
// 				setTimeout(sendNumber, 1000);
// 			}
// 		}
// 		sendNumber();
// 	});
// 	console.log("WSCLIENT interact")
// }
// WSClient()


