// const client = require('../Websocket/index.ws.client')

// client.connect('ws://localhost:8080/', 'echo-protocol');


// const


//Proxy?
//ENTRY HERE WITH
//INITIALIZE ALL SERVERS
//HTTP first
//WS next
//Client last


// const SERVER = require('./server');
// const WSSERVER = require('./websocket/server.ws');


// const intial_server = () => {

// }



// const getName = () => {
// 	return 'Jim';
//   };
  
//   exports.getName = getName;






//Go with plugin OR? *API>GATEWAY ||||| WS>GATEWAY && WS>INDEX.WS*
//OR GO with



// export to API Gateway <--
// Technically the end // Thinking a WS to watch this servervice for errors/entry etc that are not allowed.

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const API_ws_client = require('./index.ws.client2');

let sendtoWS = () => {
	relay = req.body;
}
// sendtoWS()
// let relay;

// const API_End = () => {
// function APIServer() {
	const app = express();
	const port = process.env.PORT || 5000;
	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	
	// API calls
	app.get('/api/hello', (req, res) => {
	  res.send({ express: 'Hello From Express-edit' });
	  // LOG INCOMING....???? ONLY LOGGING WHAT SERVER SENDS....
	});
	
	app.post('/api/world', (req, res) => {
		console.log(req.body);
		// let sendtoWS = () => {
			// relay = req.body;
		// }
		// sendtoWS()
	  res.send(
		`Server received client POST request. Server Replied with client input:: ${req.body.post}`,
	  );


	//   relay = req.body.post

	});
	
	if (process.env.NODE_ENV === 'production') {
	  // Serve any static files
	  app.use(express.static(path.join(__dirname, '../client/build')));
		
	  // Handle React routing, return all requests to React app
	  app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
	  });
	}
	app.listen(port, () => console.log(port));


	// app.listen(port, () => console.log(`Listening on port ${port}`));
	// console.log("APIServer interact")
	// API_ws_client()


		//If connected --> check if this connected to WS
		//Send MESSAGE
		//If not connected --> console log "not connected"

	// }
	// const Ex_API_In = new app()
	// API_Relay()
// } 
// API_End()

// const API_Relay = () => {
	
// }

module.exports = {
	sendtoWS
	// API_End,
	// API_Relay
}

// const API_CBack = () => {

// 	//Port 5000: "Hey, I hear you!"
// 	//Additional clients join: "Client(f) Reporting in! Hey!""
// 	//Send these (as WS them inside API gateway (for flexible incoming API  ins))
// 		const app = express();
// 		const port = process.env.PORT || 5000;
		
// 		app.use(bodyParser.json());
// 		app.use(bodyParser.urlencoded({ extended: true }));
		
// 		// API calls
// 		app.get('/api/hello', (req, res) => {
// 		  res.send({ express: 'Hello From Express-edit' });
// 		  // LOG INCOMING....???? ONLY LOGGING WHAT SERVER SENDS....
// 		});
		
// 		app.post('/api/world', (req, res) => {
// 		  console.log(req.body);
// 		  res.send(
// 			`Server received client POST request. Server Replied with client input:: ${req.body.post}`,
// 		  );
// 		});
		
// 		if (process.env.NODE_ENV === 'production') {
// 		  // Serve any static files
// 		  app.use(express.static(path.join(__dirname, '../client/build')));
			
// 		  // Handle React routing, return all requests to React app
// 		  app.get('*', function(req, res) {
// 			res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// 		  });
// 		}
		
// 		app.listen(port, () => console.log(`Listening on port ${port}`));
// 			console.log("APIServer interact")
// 	}






// module.exports = {
//     APIServer
// }



// const ws = require('./APIGateway/Websocket/index.ws');
// const api = require('./APIGateway/ExpressApi/index.api')
// const server = api();
// const webSocket = ws();
// const WSSGateway = require ('./APIGateway/websocket/index.ws');
// const APIGateway = require ('./APIGateway/ExpressApi/index.api')	
// const DefaultAPIEntry = () = 
















// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// // const WSSGateway = require ('./websocket/server.ws')

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

