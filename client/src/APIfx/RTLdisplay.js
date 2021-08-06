import React, { Component } from 'react';
	class RealTList extends React.Component {
		constructor(props) {
			super(props);
			this.cache = [];
			this.state = { message: "hi" };
		}
	
			

		renderRow(message, key) {
			return <div key={key}>Mesage:{key}</div>;
		  }
		  renderMessages = () => {
			//let newMessages=this,props.newMessage
			let newElement = this.renderRow(this.props.message, this.cache.length);
			this.cache.push(newElement);
			return [...this.cache];
		  };
		  render() {
			return (
			  <div>
				<div> Smart List</div>
				<div className="listcontainer">{this.renderMessages()}</div>
			  </div>
			);
		  }
		}
	
	// render(
	// 	start = () => {
	// 		if (this.interval) return;
	// 		this.interval = setInterval(this.generateMessage, 50);
	// 	};
	// 	stop = () => {
	// 		clearTimeout(this.interval);
	// 		this.interval = null;
	// 	};

	// 	generateMessage = () => {
	// 		var d = new Date();
	// 		var n = d.getMilliseconds();
	// 		this.setState({ title: n });
	// 	};



		
	// 	return (
	// 		<div className="Rtl">
	// 				<h1>Hello CodeSandbox</h1>
	// 				<h2>Start editing to see some magic happen!</h2>
	// 				<button onClick={this.start}> Start</button>
	// 				<button onClick={this.stop}> Stop</button>
	// 				<RealTimeList message={this.state.message} />
	// 		</div>


	// 	);
	// }

export default RealTList;
