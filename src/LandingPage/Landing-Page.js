import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BrewletteLogo from '../assets/BrewletteLogo.png'


// getAccountType = () => {
//     return this.props.type === 'signin' ? 'Sign In' : 'Sign Up';
// };
class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className='logo'>
                <img src={ BrewletteLogo } alt="hero"></img>
            </div>
            <p className='instructions'>
                instructions place holder
            </p>
            <form>
                email: <input type="email" /> 
                password: <input type="password" /> 
                
                <button>Submit</button>
            </form>

            <NavLink to="/signup">No account? Sign up here!</NavLink>
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
 
export default Landing;

{/* <Route exact path='/' component={Home}/>
        <Route path='/users/:' component={Profile}/>
        <Route path='/signin'
          render={(routerProps) => (
            <Auth setToken={this.setToken}
             type='signin'
             {...routerProps}
             />
          )}/>
      
      <Route path='/signup'
          render={(routerProps) => (
            <Auth setToken={this.setToken}
             type='signup'
             {...routerProps}
             />
          )}/>
          <Route path='/todos' render={(routerProps) => this.state.token ? 
          (<ToDos token={this.state.token} {...routerProps}/>) : (<Redirect to='/signin'/>)}/>
      </Switch>
      </BrowserRouter> */}