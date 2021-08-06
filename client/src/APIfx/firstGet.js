import React from 'react'

export default class HoroscopeReport extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		day: 11,
		month: 2,
		year: 2019,
		hours: 12,
		minutes: 59,
		tzone: 5.5,
		lat: 19.22,
		lon: 25.2,
		birth_details:{}
	  };
	}
  
	handleSubmit = event => {
	  event.preventDefault();
	  console.log("Received user submitted data"+JSON.stringify(this.state))
	  this.fetchBasicDetails();
	};
  
	fetchBasicDetails() {
		  let myHeaders = new Headers();
		  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
		  myHeaders.append("Authorization", "Basic XXXXXXXXXXXXXXX");
  
		  let urlencoded = new URLSearchParams();
		  urlencoded.append("day", this.state.day);
		  urlencoded.append("month", this.state.month);
		  urlencoded.append("year", this.state.year);
		  urlencoded.append("hour", this.state.hours);
		  urlencoded.append("min", this.state.minutes);
		  urlencoded.append("lat", this.state.lat);
		  urlencoded.append("lon", this.state.lon);
		  urlencoded.append("tzone", this.state.tzone);
  
		  let requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: urlencoded,
			redirect: 'follow'
		  };
  
		  fetch("https://json.astrologyapi.com/v1/birth_details", requestOptions)
			.then(response => response.text())
			.then(result => {
			  this.setState({ birth_details: result });
			})
			.catch(error => console.log('error', error));
		 }
  
	render() {
  
	  return (
		<div>
  {/* FORM SUBMITTION CODE HERE */}
				<h2>Output:-</h2>
				<table border={2} cellPadding={5}>
				  <thead>
					<tr>
					  <td>Key</td>
					  <td>Value</td>
					</tr>
				  </thead>
				  <tbody>
					{/* Object.keys(this.birth_details).forEach(function (element) {
					return <tr><td>element</td><td>this.birth_details[element]</td></tr>;
					}); */}
				  </tbody>
				</table>
		</div>
	  );
	}
  }
/*



render() {
    return (
      <div>
        <h2>Output:-</h2>
        <table border={2} cellPadding={5}>
           <thead>
              <tr>
                <td>Key</td>
                <td>Value</td>
              </tr>
           </thead>
           <tbody>
              {
                  this.state.birth_details && 
                  Object.keys(this.state.birth_details).map(function (element) {
                     return <tr>
                       <td>{element}</td>
                       <td>{this.state.birth_details[element]}</td>
                     </tr>;
                  });
              }
           </tbody>
        </table>
      </div>
    );
}
*/


/*

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "hi" };
  }

  start = () => {
    if (this.interval) return;
    this.interval = setInterval(this.generateMessage, 50);
  };
  stop = () => {
    clearTimeout(this.interval);
    this.interval = null;
  };

  generateMessage = () => {
    var d = new Date();
    var n = d.getMilliseconds();
    this.setState({ title: n });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.start}> Start</button>
        <button onClick={this.stop}> Stop</button>
        <RealTimeList message={this.state.message} />
      </div>
    );
  }
}

*/