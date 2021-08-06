//import PriceTicker from './PriceTicker.js';
import React from "react";
const Pusher = require('pusher-js')
// let callback = function(data) {
// 	return (<p>{JSON.stringify(data, null, 2)}</p>)
// // 	console.log(`bind global channel: The event ${eventName} was triggered with data ${JSON.stringify(data)}`);
//   };
// let result = pusher.bind(myEvent, callback)
// let myEvent = 'tick-price';
// let myChannel = pusher.subscribe('my-channel');
// myChannel.bind(myEvent, function(data){
// 	//add new price into APPL widget
// 	return (
// 		<div>{data}</div>
// 	)
// });



// let data = {"myC": "my-channel",  "myE": myEvent}


// const myChannel = pusher.subscribe('my-channel');
// pusher.bind('tick-price', callback)

// 	console.log("LAST RESORT LOG")
// 	return (
// 		(console.info(data))
// 		)
  
  // listen for 'new-comment' event on channel 1, 2 and 3
  

  class ChannelDir extends React.Component {
	render() {
		let para = {};
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
		<div>{para}</div>
	)
	}
}
	// const pusher = new Pusher ("078d9465c5751acb7f10", {
	// 	cluster: 'ap4'
	//   });
	
		// 	 data could be a prop for example
		// 	 const { data } = this.props;
		// 	 return (){
		// }
	// };
	// }
	

//ReactDOM.render(<PrettyPrintJson/>, document.getElementById('container'));

// const ChannelOne = function (channel_data, channel_event, callback) {
// 	let channel = channel_data;
// 	pushy.bind(channel_event, callBack);
	// channel.bind(channel_event, function() {
	
		
	//  });


 export default ChannelDir

