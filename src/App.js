import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './LandingPage/Landing-Page.js';
import Home from './Home/Home.js';

class App extends Component {
  state = { token: localStorage.getItem('BREWTOKEN') }
  setToken = (val) => {
    this.setState({token: val});
  }
render() { 
    return (  
      <>
      <BrowserRouter>
      <Switch>
      <Route exact path="/signup" render={(routerProps) => (<Landing type='signup'
            setToken={this.setToken} {...routerProps}/>)}>
            </Route>

            <Route path="/signin" render={(routerProps) => (<Landing type='signin'
            setToken={this.setToken} {...routerProps}/>)}>
            </Route>

            <Route path="/" render={(routerProps) => (<Home type='home'
            setToken={this.setToken} {...routerProps}/>)} />
      </Switch>
      </BrowserRouter>
      </>
    );
  }
}
 
export default App;