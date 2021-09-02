import React, { Component } from 'react';
// import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import BrewletteLogo from '../assets/BrewletteLogo.png';


class Home extends Component {
    state = { showMessage: 'No', hidden: false }

    handleClick = () => {
        this.setState({ showMessage: "Try again next year" })
        this.setState({ hidden: true });
    }

    render() { 
        return ( 
            <section className="home">

            <h1>Welcome to Brewlette!</h1>

            <div className='logo'>
                <img src={ BrewletteLogo } alt="hero"></img>
            </div>

            <h3>You must be 21 or older to enter</h3>
            <h2>You're 21, right?</h2>

            {!this.state.hidden ? 
            <div id="btns-div" className="navlinks-homePage">

            <NavLink to="/signin">
                <button className="buttons"> Yes </button>

            </NavLink>
                <button className="buttons" onClick={this.handleClick}>{this.state.showMessage}</button>

            </div>
            : 
            <div className="not21Box">{this.state.showMessage}</div>
            } 


           
            
            </section>
            
         );
    }
}
 
export default Home;

