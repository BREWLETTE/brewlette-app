import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BrewletteLogo from '../assets/BrewletteLogo.png';
import { getToken } from '../fetch-utils.js';
import './Landing-Page.css'



class Landing extends Component {
    state = {  email: '', password: '', name: '' }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const token = await getToken(
            {
                email: this.state.email,
                password: this.state.password,
            },
            this.props.type
        );
        console.log(token)
        this.props.setToken(token);
        // this.props.history.push('/roulette');
    };

    render() { 
        return ( 
            <section className='landing'>
            <div className='logo'>
                <img src={ BrewletteLogo } alt="hero"></img>
            </div>
            <p className='instructions'>
                instructions place holder
            </p>
            <form onSubmit={this.handleSubmit}>
                name: <input onChange={(e) => this.setState({ name: e.target.value})} type='name' /> 
                email: <input onChange={(e) => this.setState({ email: e.target.value})} type="email" /> 
                password: <input onChange={(e) => this.setState({ password: e.target.value})} type="password" /> 
                
                <button>Submit</button>
            </form>

            <NavLink to="/signup">No account? Sign up here!</NavLink>
            <footer>
                <p>
                    copyright place holder
                </p>
                <NavLink to='/aboutus'>About Us</NavLink>
            </footer>
            </section>
         );
    }
}
 
export default Landing;

/*{ <Route exact path='/' component={Home}/>
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
      </BrowserRouter> }*/