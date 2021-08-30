import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './LandingPage/Sign-Up-Landing-Page';
import Landing from './LandingPage/Landing-Page.js';

class App extends Component {
  state = {  }
  render() { 
    return (  
      <>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} type='signin'></Route>
        <Route path='/signup' component={SignUp} type='signup' ></Route>
      <Landing />
      </Switch>
      </BrowserRouter>
      </>
    );
  }
}
 
export default App;