import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './LandingPage/Landing-Page.js';
import Home from './Home/Home.js';
import Roulette from './Roulette/Roulette.js';
import { Footer } from './Footer';
import './App.css';


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
      <Route path="/signup" render={(routerProps) => (<Landing type='signup'
            setToken={this.setToken} {...routerProps}/>)}>
            </Route>

            <Route path="/signin" render={(routerProps) => (<Landing type='signin'
            setToken={this.setToken} {...routerProps}/>)}>
            </Route>

            <Route exact path="/" render={(routerProps) => (<Home type='home'
            setToken={this.setToken} {...routerProps}/>)} />

            <Route path="/roulette" render={(routerProps) => (<Roulette type='roulette'
            setToken={this.setToken} {...routerProps}/>)} />

      </Switch>

      <Footer />

      </BrowserRouter>
      </>
    );
  }
}
 
export default App;