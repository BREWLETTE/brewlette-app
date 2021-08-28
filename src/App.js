import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Landing from './LandingPage/Landing-Page.js';

class App extends Component {
  state = {  }
  render() { 
    return (  
      <>
      <BrowserRouter>
      <Landing />
        
      </BrowserRouter>
      </>
    );
  }
}
 
export default App;