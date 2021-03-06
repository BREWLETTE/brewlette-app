import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {Landing} from './LandingPage';
import Home from './Home/Home.js';
import Roulette from './Roulette/Roulette.js';
import { Footer } from './Footer';
import './App.css';
import About from './About.js';
import Detail from './Detail/Detail.js';
import Drawers from './Drawers/Drawers';
import Profile from './Profile/Profile';

class App extends Component {
  state = { token: JSON.parse(localStorage.getItem('BREWTOKEN')), brewery:{} }
  setToken = (val) => {
    this.setState({token: val});
  }
  stateHandler = async (brewObj) => {

    await this.setState({
      brewery: brewObj
    })
  }

  redirectProfile = () => {
    window.location.replace('/profile')
  }

  logout = () => {
    localStorage.removeItem('BREWTOKEN');
    this.setState({ token: '' });
    window.location.replace('/')
};

redirectHome = () =>{
  window.location.replace('/')
}
redirectRoulette = () =>{
  window.location.replace('/roulette')
}
render() { 

    return (  
      <>
      <BrowserRouter>
      <Drawers
            logOut ={this.logout}
            goProfile = {this.redirectProfile}
            goRoulette = {this.redirectRoulette}
        />
      <Switch>
            <Route path="/signup" render={(routerProps) => (<Landing type='signup'
            setToken={this.setToken} {...routerProps}/>)} />
            
            <Route path="/signin" render={(routerProps) => (<Landing type='signin'
            setToken={this.setToken} {...routerProps}/>)} />
            
            <Route exact path="/" render={(routerProps) => (<Home type='home'
            setToken={this.setToken} {...routerProps}/>)} />

            <Route path='/aboutus' render={(routerProps) => (<About type='aboutus'
            {...routerProps}/>)}/>

             <Route path="/roulette" 
             render={(routerProps) => this.state.token ? 
              (<Roulette type='roulette'
             token={this.state.token}
             brewery={this.state.brewery} 
             stateHandler={this.stateHandler} 
             {...routerProps}/>) : 
             (<Redirect to='/signin'/>)} />

            <Route path="/detail" render={(routerProps) => (<Detail type='detail'
             token={this.state.token} brewery={this.state.brewery} {...routerProps}/>)} />  

            <Route path="/profile" render={(routerProps) => (<Profile type='profile'
             token={this.state.token} brewery={this.state.brewery} {...routerProps}/>)} />  

      </Switch>

      <Footer />
      </BrowserRouter>
      </>
    );
  }
}
 
export default App;