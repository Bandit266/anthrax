//import ChannelOne from './Channels.js';
const pusher = require('pusher-js')
const pushy = new pusher ("078d9465c5751acb7f10");
// let data = {
// 	"dog": "doggy",
// 	"cat": "catty"
// }
const PriceTicker = (a, b, c) => {
	// ChannelOne()
	setInterval(() => {
		// this.. f.trigger is not a function js.7
		// start
		// stuff shows up.
		pushy.trigger(a, b, {  //not a function
			message: c
		});
	  }, 2000);
	  return c
  }

  export default PriceTicker("a", "b", "c");