import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Landing} from './LandingPage';
import Home from './Home/Home.js';
import Roulette from './Roulette/Roulette.js';
import { Footer } from './Footer';
import './App.css';

import Detail from './Detail/Detail.js';

class App extends Component {
  state = { token: JSON.parse(localStorage.getItem('BREWTOKEN')), brewery:{} }
  setToken = (val) => {
    this.setState({token: val});
  }
  stateHandler = async (brewObj) => {
    console.log('setHandler RUNNING')
    await this.setState({
      brewery: brewObj
    })
  }
render() { 
  console.log(this.state.brewery);
    return (  
      <>
      <BrowserRouter>
      <Switch>
            <Route path="/signup" render={(routerProps) => (<Landing type='signup'
            setToken={this.setToken} {...routerProps}/>)} />
            
            <Route path="/signin" render={(routerProps) => (<Landing type='signin'
            setToken={this.setToken} {...routerProps}/>)} />
            
            <Route exact path="/" render={(routerProps) => (<Home type='home'
            setToken={this.setToken} {...routerProps}/>)} />

            <Route path="/roulette" render={(routerProps) => (<Roulette type='roulette'
          
            token={this.state.token}
            brewery={this.state.brewery} 
            stateHandler={this.stateHandler} 
            {...routerProps}/>)} />

            <Route path="/detail" render={(routerProps) => (<Detail type='detail'
             token={this.state.token} brewery={this.state.brewery} {...routerProps}/>)} />  

      </Switch>

      <Footer />

      </BrowserRouter>
      </>
    );
  }
}
 
export default App;