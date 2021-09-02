import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
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
  logout = () => {
    localStorage.removeItem('BREWTOKEN');
    this.setState({ token: '' });
};
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

{/* {this.state.token && (
                        <>
                            <NavLink to="/todos">To Do List</NavLink>
                            <Link to="/" onClick={this.logout}>
                                Logout{' '}
                            </Link>
                        </>
                    )}
                    {!this.state.token && (
                        <>
                            <NavLink to="/signin">Sign In</NavLink>
                            <NavLink to="/signup">Sign Up</NavLink>
                        </> */}

      </Switch>

      <Footer />

      </BrowserRouter>
      </>
    );
  }
}
 
export default App;