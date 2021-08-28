import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <header className="links">
            <div>
                <NavLink exact to="/">
                    Home
                </NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to='/signin'>Sign In</NavLink>
            </div>
            </header>
            </>
         );
    }
}
 
export default Header;