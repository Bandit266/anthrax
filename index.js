//Proxy?
//ENTRY HERE WITH
//INITIALIZE ALL SERVERS ----- INITIALISE THIS, INITIALISE THIS, INITIALISE THIS, CHECK THIS, CHECK THIS, APPROVE THAT.
//HTTP first
//WS next
//Client last
//ADMIN
// var WSClient = require('./APIGateway/Websocket/index.ws.client');

// const wsclient = new WSClient();
// let masterKey = 77
// if (masterKey === 77 ) {
// 	let init = push.key; //Pass
// } else if (key === false) {
// 	let init = 800;// failed
// } else {
// 	init = null
// }


// function Bridge() {
// 	// APIServer()
// 	// WSServer()
// 	WSClient.connect('ws://localhost:8080/', 'echo-protocol');
// 	// apiclient.connect
// 	console.log("Bridge Entry interact")
// }
// Bridge()

// module.exports = {
//     Bridge
// }

// const { Bridge } = require('./server/index');


// Bridge()
const { ChannelAccess } = require('./APIGateway/index.gate.api');


// const Bridge = () => {
	ChannelAccess()
// }








// const SERVER = require('./server');
// const WSSERVER = require('./websocket/server.ws');
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const APIGateway = require('./APIGateway/index.gate.api')

// // const ws = require('./APIGateway/Websocket/index.ws');
// // const api = require('./APIGateway/ExpressApi/index.api')
// // const server = api();
// // const webSocket = ws();
// // const WSSGateway = require ('./APIGateway/websocket/index.ws');
// // const APIGateway = require ('./APIGateway/ExpressApi/index.api')

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

