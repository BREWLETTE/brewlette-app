import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            {/* <img src="../assets/beer.jpg" alt="hero"></img> */}
            
            <form>
                email: <input type="email" /> 
                password: <input type="password" /> 
                
                <button>Submit</button>
            </form>

            <NavLink to="/signup">No account? Sign up here!</NavLink>
            <footer></footer>
            </>
         );
    }
}
 
export default Landing;