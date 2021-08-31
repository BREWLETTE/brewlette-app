import React, { Component } from 'react';
// import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './Home.css';


class Home extends Component {
    state = { showMessage: false }

    handleClick = () => {
        this.setState({showMessage: true})
    }

    render() { 
        return ( 
            <>
            <h1>You're 21, right? ;3</h1>
            <NavLink to="/signin">
                <button>
                    <p>Yes!</p>
                </button>
            </NavLink>
                <button onClick={this.state.showMessage && <div className="not21">Try again next year</div>}>
                    <p>Not yet...</p>
                </button>
            </>
         );
    }
}
 
export default Home;