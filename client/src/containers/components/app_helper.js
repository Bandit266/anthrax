import React from "react";
import { Line } from "react-chartjs-2";
// import App from "src/App";



class App_Helper extends React.Component {
	componentDidMount =() => {
		const subscribe = {
		  type: "subscribe",
		  channels: [
			{
			  channelname: "my-channel",
			  events: ["BTC-USD"]
			}
		  ]
		};
	
		this.ws = new WebSocket("wss://ws-feed.gdax.com");
	
		this.ws.onopen = () => {
		  this.ws.send(JSON.stringify(subscribe));
		};
	
		this.ws.onmessage = e => {
		  const value = JSON.parse(e.data);
		  if (value.type !== "ticker") {
			return;
		  }
	
		  const oldBtcDataSet = this.state.lineChartData.datasets[0];
		  const newBtcDataSet = { ...oldBtcDataSet };
		  newBtcDataSet.data.push(value.price);
	
		  const newChartData = {
			...this.state.lineChartData,
			datasets: [newBtcDataSet],
			labels: this.state.lineChartData.labels.concat(
			  new Date().toLocaleTimeString()
			)
		  };
		  this.setState({ lineChartData: newChartData });
		};
	  }
	
	  componentWillUnmount = () => {
		this.ws.close();
	  }

	render() {
		let classing = { classing }
		return classing = this.props
	}
		
	};

//--------------------------------------
export default App_Helper;