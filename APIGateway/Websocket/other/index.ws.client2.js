
// const getName = () => {
// 	return 'Jim';
//   };
  
//   exports.getName = getName;

//get ../websocket/index.ws.js <--
//post (forward) restricted data to the gateway <--
var WebSocketClient = require('websocket').client;

const API_ws_client = () => {
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
    const api_message = require('../../ExpressApi/index.api');

    function Ex_API_In() {
        if (connection.connected) {
			
            // var number = Math.round(Math.random() * 0xFFFFFF);
			let APIout = api_message;
			connection.send(APIout);
			setTimeout(Ex_API_In, 100);
            // connection.sendUTF(number.toString());
            // setTimeout(sendNumber, 1000);
        }
    }
    Ex_API_In();
});

client.connect('ws://localhost:8080/', 'echo-protocol');
}

module.exports = {
	API_ws_client
}



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