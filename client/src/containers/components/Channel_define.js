import React, { useState, useEffect } from "react";
import {
	CBadge,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CDataTable,
	CRow,
	CPagination,
  } from "@coreui/react";
  const Pusher = require('pusher-js')
// const DataChannel = {
// 	channel: "ch",
// 	event: "ev",
// 	description: "desc",
// 	permissions: "perms"
// }

let channel_name = "binance-ws"
let event_name = "binance-event"
let desc = "potatoes"
let perms = "red"
const DataChannel = {
	channel: channel_name,
	event: event_name,
	description: desc,
	permissions: perms
}

class Channel extends React.Component {

	  render(){
		let para;
		Pusher.logToConsole = true;
    	const pusher = new Pusher("078d9465c5751acb7f10", {
		cluster: 'ap4',
        forceTLS: true
    });
        const channel = pusher.subscribe('my-channel');
        channel.bind('tick-price', data => {
        para = JSON.stringify(data)               //Bind the data to the channel @ _Binance. This, Listens and binds/relays Others listen to this.
        });

		return (
			<>
			<CCol>
			<CRow>
			  Users
			  <small className="text-muted"> example</small>
			</CRow>
			<CRow>
			  <CDataTable
				fields={[
				  { key: "name", _classes: "font-weight-bold" },
				  "registered",
				  "role",
				  "status",
				]}
			  //   hover
			  //   striped
			  //   itemsPerPage={12}
			  //   activePage={page}
			  //   clickableRows
			  //   onRowClick={(item) => history.push(`/stats/${item.id}`)}
			  //   scopedSlots={{
			  //     status: (item) => (
			  //       <td>
			  //         <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
			  //       </td>
			  //     ),
			  //   }}
			  />
			</CRow>
		  </CCol>
		  </>
		);
	  }


	// init () {

	// }

};;
export default Channel;


// class APIGate {
// 	constructor(apiName, apiLink, auth, status) {
// 		this.name = apiName;
// 	  	this.apiLink = apiLink;
// 	  	this.auth = auth;
// 	  	this.status = status;
// 	}
// 	getAPI() {
// 		return `
// 			apiname: ${this.apiName}
// 			apigate: ${this.apiLink}
// 			apiauth: ${this.auth}
// 			status: ${this.status}
// 		`;
// 	}
// }




// async function APIGatewayFetch() {
    // const response =
    //   await fetch(`${BinAcc}`,
    //      { headers: {'Content-Type': 'application/json'}},
	// 	 { params: {'prices': 'application/json'}}
    //   )
	//   console.log(await response.json())
// }
// let APIG = APIGatewayFetch()
// 	console.log(APIG)
// Module {
// 	id: '.',
// 	exports: {},
// 	parent: null,
// 	filename: '/home/jim/Desktop/index.js',
// 	loaded: false,
// 	children: [],
// 	paths:
// 	 [ '/home/jim/Desktop/node_modules',
// 	   '/home/jim/node_modules',
// 	   '/home/node_modules',
// 	   '/node_modules' ] }
// exports.foo = 'foo';
// module.exports = () => { console.log('bar'); };


// function request(url) {
// 	return new Promise((resolve, reject) => {
// 	  setTimeout(() => {
// 		reject(`Network error when trying to reach ${url}`);
// 	  }, 500);
// 	});
//   }


// function wait (timeout) {
// 	return new Promise((resolve) => {
// 	  setTimeout(() => {
// 		resolve()
// 	  }, timeout);
// 	});
//   }
  
//   async function requestWithRetry (url) {
// 	const MAX_RETRIES = 10;
// 	for (let i = 0; i <= MAX_RETRIES; i++) {
// 	  try {
// 		return await request(url);
// 	  } catch (err) {
// 		const timeout = Math.pow(2, i);
// 		console.log('Waiting', timeout, 'ms');
// 		await wait(timeout);
// 		console.log('Retrying', err.message, i);
// 	  }
// 	}
//   }

//   requestWithRetry('https://fapi.binance.com')
//   .then((res) => {
//     console.log(res)
// 	console.log("this was a response FAPI.Binance")
//   })
//   .catch(err => {
//     console.error(err)
//   });
  
//   async function requestWithRetry (url) {
// 	const MAX_RETRIES = 10;
// 	for (let i = 0; i <= MAX_RETRIES; i++) {
// 	  try {
// 		return await request(url);
// 	  } catch (err) {
// 		const timeout = Math.pow(2, i);
// 		console.log('Waiting', timeout, 'ms');
// 		await wait(timeout);
// 		console.log('Retrying', err.message, i);
// 	  }
// 	}
//   }

//   requestWithRetry('http://localhost:3000')
//   .then((res) => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.error(err)
//   });



// const APIGate = class{
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }

//     result(){
//         return this.a + this.b
//     }
// }

// module.exports = Server;