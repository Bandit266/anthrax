import React from 'react'

class RealTimeList extends React.Component {
	constructor(props) {
	  super(props);
	  this.cache = [];
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

  export default RealTimeList;