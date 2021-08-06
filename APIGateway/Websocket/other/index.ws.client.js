
// const getName = () => {
// 	return 'Jim';
//   };
  
//   exports.getName = getName;

//get ../websocket/index.ws.js <--
//post (forward) restricted data to the gateway <--
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
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
			console.log(`sent: ${number.toString()} with 7sec`);
            setTimeout(sendNumber, 7000);
        }
    }
    sendNumber();
});

client.connect('ws://localhost:8080/', 'echo-protocol');


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



// module.exports = {
//     WSClient
// }