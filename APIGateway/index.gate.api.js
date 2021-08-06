//Proxy?
//ENTRY HERE WITH
//INITIALIZE ALL SERVERS
//HTTP first
//WS next
//Client last
const { ClientWSMaster } = require("./Websocket/index.ws.client.master")
const { ClientWSClient } = require("./Websocket/index.ws.client.client")
const { ClientWSAPI } = require("./ExpressApi/index.ws.client.api")
// const { Logs, Error } = require("./Websocket/other/index.ws.client")
// const {API_End} = require("./ExpressApi/index.api")

// QUESTION : to run   a constant stream filtered in json, permissions extract the logstash
// or separate instances

//Access to all
//ACCESS Levels
const Access = {
	"admin": 4,
	"subadmin": 3,
	"client": 1,
	"logs": 2
}

// Faucet Message Access
const incommessage = {
	"permission": "admin",
	"permToken": 4
}


//Access Level initiate FX
const Admin = () => {
	//all access
	ClientWSMaster();
	ClientWSClient()
	ClientWSAPI()// dont need to worry about for now...


	// SubAdmin()
	// Visitor();
	// Logs();
}		

const SubAdmin = () => {
	//second Admin for proxy reasons
}

// const Visitor = () => {
// 	Client();
// 	// API_End();
// }

// const Logs = () => {
// 	//logs.error true //
// 	//logs.logs true //
// 	LogClient();
// 	ErrorClient();
// }

// Access levels (permission Functions):
const ChannelAccess = () => {
	if (incommessage.permToken === Access.admin) {
		console.log("admin access")
		return Admin()
	} else if (incommessage.permToken === Access.subadmin) {
		console.log("subAdmin access")
		return SubAdmin()
	} else if (incommessage.permToken === Access.client) {
		console.log("visitor access")
		return Visitor()
	} else if (incommessage.permToken === Access.logs) {
		console.log("logs access")
		return Logs()
	}
}

//SERVE
module.exports = {
    ChannelAccess

}


























// Logs()

// console.log(Client);



// const SERVER = require('./server');
// const WSSERVER = require('./websocket/server.ws');

//GATEWAY
// var WSServer = require('./Websocket/index.ws');
// var API_init = require ('./ExpressApi/index.api').API_initialize
// let masterkey = "ping";
// let key = "ping"
// let slave = "pong";
// let fail = "fail"
// var WebSocketClient = require('websocket').client;
// var clientGate = new WebSocketClient();
// let MasterClient = require('./Websocket/index.ws.client.master')
// let masterkeyArray = []; //not needed?


//         if (key === masterkey) {
// console.log("yay")


















//     // let passArray = []
//     function sendClientResponse() {

// 		// let key2 = slave
// 		// let pass = 1;

// 		clientGate.on('connectFailed', function(error) {	
// 			console.log('Connect Error: ' + error.toString());
// 			// else { //they dont like it
// 			// 	console.log("Gateway not connecting to ws/api")
// 			// }
// 		});
		
// 		clientGate.on('connect', function(connection) {
// 			console.log('WebSocket ClientGateway!!!! ---  Connected');
// 			connection.on('error', function(error) {
// 				console.log("Connection Error: " + error.toString());
// 			});
// 			connection.on('close', function() {
// 				console.log('echo-protocol Connection Closed');
// 			});
		
// 			console.log('ping...pong.. unrelated')
// 			connection.on('message', function(message) {
// 				if (message.type === 'utf8') {
// 					if (masterkey === "ping"){
// 						console.log("Received.....7799....7799: '" + message.utf8Data + "'");
		
// 					}
// 				} else {
// 					console.log(`message didnt pass ${masterkey}, got other ${masterkey} and ${message}`)
// 				}
// 			});
// // It is sending the below.............................. and dplicating
// 			// let slave = "pong";
//             if (connection.connected) {
// 				// if (pass === 1) {
// 					// passArray.push("1")
// 					console.log("(gateway masterkey parse)")
				
// 				// else (pass == 0)
// 				// console.log(masterkey)
// 			// } 
// 			// if (key === slave) {
// 			// 	console.log(`Got ${slave}`)
// 			// } else {
// 			// 	console.log(`Got fail ${fail}`) //we are here..............
// 			// }
// 			// let APIout = api_message;
// 			// connection.send(APIout);
// 			// setTimeout(Ex_API_In, 100);
//             // connection.sendUTF(masterkeyArray.push('8')
// 			// .toString());
// 			console.log(`sent: (${masterkey}, ${key}): ..stuffwith 1 seconds`); // at fail.. doesnt know INT
// 			// connection.send(init)
//             setTimeout(sendClientResponse, 1000);
// // check GATEWAY status every second. Return error codes ... forward error codes on.
//             // connection.send("Port 5000");
//             // setTimeout(sendNumber, 1000);
//         } 
// 		})

// 		clientGate.connect('ws://localhost:8080/', 'echo-protocol');

// 		}	sendClientResponse()
// }
	

    
	
// 	else if (key === false) {
// 		let fail = 800;// failed
// 		if (connection.connected) {
//             // var number = 5000;
// 			// let APIout = api_message;
// 			// connection.send(APIout);
// 			// setTimeout(Ex_API_In, 100);
//             connection.sendUTF(init.toString());
// 			console.log(`sent: ${init.toString()} with 1 seconds`);
// 			// connection.send(init)
//             setTimeout(sendClientResponse, 1000);
// // check GATEWAY status every second. Return error codes ... forward error codes on.
//             // connection.send("Port 5000");
//             // setTimeout(sendNumber, 1000);
//         } 
// 	} else {
// 			// connection.sendUTF(fail.toString());
// 			console.log("ME RETARDED");
// 			// connection.send(init)
//             setTimeout(sendClientResponse, 3000);
// 		}
// }
		
//     sendClientResponse();
// });
// })




// const APIServer = new APIClient();


// function getUser() {
//     // Code here
// }

// function getUsers() {
//     // Code here
// }



// module.exports = function (apiInOut, client) {
//     this.APIClient = apiInOut;
//     this.WSClientN = client;
//     this.runBoth = function () { 
//         return this.apiInOut && this.client;
//     }
// }


// function APIGateway() {
// 	API_init()
// 	// WSServer()
// 	// wsclient.connect('ws://localhost:8080/', 'echo-protocol');
// 	// // apiclient.connect
// 	// console.log("Gateway socket interact")
// }
// APIGateway()

// module.exports = {
//     APIGateway
// }

// const ws = require('./Websocket/index.ws');
// const api = require('./ExpressApi/index.api')
// console.info(api);
// console.info(ws);




//GET ./ExpressApi/... <--
//GET ./Websocket/... <--

//Do something with




// export controls to interact with.

//export initiation to index server (start).   <--













// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const WSSGateway = require ('./APIGateway/websocket/index.ws');
// const APIGateway = require ('./APIGateway/ExpressApi/index.api')

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // API calls
// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express-edit' });
// });

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `Server received client POST request. Server Replied with client input:: ${req.body.post}`,
//   );
// });

// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, '../client/build')));
    
//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//   });
// }

// app.listen(port, () => console.log(`Listening on port ${port}`));

