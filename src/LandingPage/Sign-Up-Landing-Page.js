import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BrewletteLogo from '../assets/BrewletteLogo.png'


// getAccountType = () => {
//     return this.props.type === 'signin' ? 'Sign In' : 'Sign Up';
// };
class SignUp extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className='logo'>
                <img src={ BrewletteLogo } alt="hero"></img>
            </div>
            <p className='instructions'>
                PLEASE SIGN UP HERE-- AGE PARAMETERS
            </p>
            <form>
                email: <input type="email" /> 
                password: <input type="password" /> 
                
                <button>Submit</button>
            </form>

            <NavLink to="/">Go Back To Sign In Page!</NavLink>
            <footer>
                <p>
                    copyright place holder
                </p>
                <NavLink to='/aboutus'>About Us</NavLink>
            </footer>
            </>
         );
    }
}
export default SignUp;