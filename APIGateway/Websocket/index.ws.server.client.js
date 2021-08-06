#!/usr/bin/env node
var WebSocketServer = require('websocket').server;
var http = require('http');


//this ws into api gateway as usable
// only//off//send data//channels

//export relevent to API server (what? errors? flags?) <--


function WSClientMaster() {
	var server = http.createServer(function(request, response) {
		console.log((new Date()) + ' Received request for ' + request.url);
		response.writeHead(404);
		response.end();
	});
	server.listen(8080, function() {
		console.log((new Date()) + ' Server is listening on port 8080');
	});
	
	wsServer = new WebSocketServer({
		httpServer: server,
		// You should not use autoAcceptConnections for production
		// applications, as it defeats all standard cross-origin protection
		// facilities built into the protocol and the browser.  You should
		// *always* verify the connection's origin and decide whether or not
		// to accept it.
		autoAcceptConnections: false
	});
	
	function originIsAllowed(origin) {
	  // put logic here to detect whether the specified origin is allowed.
	  return true;
	}
	
	wsServer.on('request', function(request) {
		if (!originIsAllowed(request.origin)) {
		  // Make sure we only accept requests from an allowed origin
		  request.reject();
		  console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
		  return;
		}
		
		var connection = request.accept('echo-protocol', request.origin);
		console.log((new Date()) + ' Connection accepted.');
		connection.on('message', function(message) {
			if (message.type === 'utf8') {
				console.log('Received Message: ' + message.utf8Data);
				connection.sendUTF(message.utf8Data);
				console.log('Sent Message: ' + message.utf8Data);
			}
			else if (message.type === 'binary') {
				console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
				connection.sendBytes(message.binaryData);
			}
		});
		connection.on('close', function(reasonCode, description) {
			console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
		});
	});
	}
	WSClientMaster()
//No need to export------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////



//Example: /Export

// const getName = () => {
// 	return 'Jim';
//   };
  
//   exports.getName = getName;



	
// var WebSocketClient = require('websocket').client;


// //CLIENT MASTER CLIENT WEBSOCKET
// const MasterClient = () => {
// 	var client = new WebSocketClient();
// client.on('connectFailed', function(error) {
//     console.log('Connect Error: ' + error.toString());
// });
// client.on('connect', function(connection) {
//     console.log('WebSocket MASTER Client Connected');
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
// 			console.log(`MASTER STREAM, sent: ${number.toString()} with 3sec`);
//             setTimeout(sendNumber, 3000);
//         }
//     }
//     sendNumber();
// });
// client.connect('ws://localhost:8081/', 'echo-protocol');
// }


// //CLIENT CLIENT WEBSOCKET
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


// //CLIENT LOG WEBSOCKET
// const LogClient = () => {
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
// 			console.log(`LOG STREAM, sent: ${number.toString()} with 5sec`);
//             setTimeout(sendNumber, 5000);
//         }
//     }
//     sendNumber();
// });
// client.connect('ws://localhost:8082/', 'echo-protocol');
// }


// //CLIENT ERROR WEBSOCKET
// const ErrorClient = () => {
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
// 			console.log(`ERROR STREAM, sent: ${number.toString()} with 5sec`);
//             setTimeout(sendNumber, 5000);
//         }
//     }
//     sendNumber();
// });
// client.connect('ws://localhost:8083/', 'echo-protocol');
// }


// module.exports = {
// 	MasterClient,
// 	Client,
// 	LogClient,
// 	ErrorClient
// }



// function WSServer() {
// var server = http.createServer(function(request, response) {
//     console.log((new Date()) + ' Received request for ' + request.url);
//     response.writeHead(404);
//     response.end();
// });
// server.listen(8080, function() {
//     console.log((new Date()) + ' Server is listening on port 8080');
// });

// wsServer = new WebSocketServer({
//     httpServer: server,
//     // You should not use autoAcceptConnections for production
//     // applications, as it defeats all standard cross-origin protection
//     // facilities built into the protocol and the browser.  You should
//     // *always* verify the connection's origin and decide whether or not
//     // to accept it.
//     autoAcceptConnections: false
// });

// function originIsAllowed(origin) {
//   // put logic here to detect whether the specified origin is allowed.
//   return true;
// }

// wsServer.on('request', function(request) {
//     if (!originIsAllowed(request.origin)) {
//       // Make sure we only accept requests from an allowed origin
//       request.reject();
//       console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
//       return;
//     }
    
//     var connection = request.accept('echo-protocol', request.origin);
//     console.log((new Date()) + ' Connection accepted.');
//     connection.on('message', function(message) {
//         if (message.type === 'utf8') {
//             console.log('Received Message: ' + message.utf8Data);
//             connection.sendUTF(message.utf8Data);
// 			console.log('Sent Message: ' + message.utf8Data);
//         }
//         else if (message.type === 'binary') {
//             console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
//             connection.sendBytes(message.binaryData);
//         }
//     });
//     connection.on('close', function(reasonCode, description) {
//         console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
//     });
// });
// }
// WSServer()

// output port to channels





// module.exports = {
//     WSServer
// }

// var WebSocketClient = require('websocket').client;

// var client = new WebSocketClient();

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
//             setTimeout(sendNumber, 1000);
//         }
//     }
//     sendNumber();
// });

// client.connect('ws://localhost:8080/', 'echo-protocol');



// import { createStore } from 'redux'

// const initialState = {
//   sidebarShow: 'responsive'
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return {...state, ...rest }
//     default:
//       return state
//   }
// }

// const store = createStore(changeState)
// export default store