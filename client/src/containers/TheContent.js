import React, { Component } from 'react'
// import {
//   Redirect,
//   Route,
//   Switch
// } from 'react-router-dom'
// import { CContainer, CFade } from '@coreui/react'
// import logo from './logo.svg';
// routes config
// import routes from '../routes'
  



class TheContent extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
render() {
    return (
		<div className="App">
      <div>
			<input className="bp3-input" type="text" placeholder="Search..." />
			<div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
		</div>
</div>

        <div>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
		  
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
	  </div>
    );
  }

}

export default TheContent;
































// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )


// const TheContent = () => {
//   return (
//     <main className="c-main">
//       <CContainer fluid>
//         <Suspense fallback={loading}>
//           <Switch>
//             {routes.map((route, idx) => {
//               return route.component && (
//                 <Route
//                   key={idx}
//                   path={route.path}
//                   exact={route.exact}
//                   name={route.name}
//                   render={props => (
//                     <CFade>
//                       <route.component {...props} />
//                     </CFade>
//                   )} />
//               )
//             })}
//             <Redirect from="/" to="/dashboard" />
//           </Switch>
//         </Suspense>
//       </CContainer>
//     </main>
//   )
// }

// export default React.memo(TheContent)


