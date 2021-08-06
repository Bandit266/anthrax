//Proxy?
//ENTRY HERE WITH
//INITIALIZE ALL SERVERS
//HTTP first
//WS next
//Client last


// const SERVER = require('./server');
// const WSSERVER = require('./websocket/server.ws');

//GATEWAY
// var WSServer = require('./Websocket/index.ws');
var API_init = require ('./ExpressApi/index.api').API_initialize


var WebSocketClient = require('websocket').client;

var clientGate = new WebSocketClient();

clientGate.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

clientGate.on('connect', function(connection) {
    console.log('WebSocket ClientGateway!!!! ---  Connected');
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
            // var number = 5000;
			var init = 500;
			// let APIout = api_message;
			// connection.send(APIout);
			// setTimeout(Ex_API_In, 100);
            connection.sendUTF(init.toString());
			console.log(`sent: ${init.toString()}`);
			// connection.send(init)
            setTimeout(sendNumber, 5000);

            // connection.send("Port 5000");
            // setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
});

clientGate.connect('ws://localhost:8080/', 'echo-protocol');



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

