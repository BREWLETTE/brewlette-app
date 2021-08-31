import React, { Component } from 'react';
// import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './Home.css';


class Home extends Component {
    state = { showMessage: 'No'}

    handleClick = () => {
        this.setState({showMessage: "Try again next year"})
        
    }

    render() { 
        return ( 
            <>
            <h1>You're 21, right? ;3</h1>
            <NavLink to="/signin">
                <button className="hidden">
                    <p>Yes!</p>
                </button>
            </NavLink>
                <button className ="hidden" onClick={this.handleClick}>{this.state.showMessage}</button>
                <p>{this.state.showMessage}</p>
            </>
         );
    }
}
 
export default Home;

