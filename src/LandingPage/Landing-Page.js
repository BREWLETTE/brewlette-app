import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BrewletteLogo from '../assets/BrewletteLogo.png';
import { getToken } from '../fetch-utils.js';
import './Landing-Page.css'



class Landing extends Component {
    state = {  email: '', password: '', name: '' }

    getAccountType = () => {
        return this.props.type === 'signin' ? 'No Account? Sign Up Here!' : '';
    };

    geTypeMessage = () => {
        return this.props.type === 'signup' ? "Go back to login" : '';
    };

    getButtonType = () => {
        return this.props.type === 'signin' ? "Sign In" : 'Sign Up';
    };


    handleSubmit = async (event) => {
        event.preventDefault();
        
        const token = await getToken(
            {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            },
            this.props.type
        );
        console.log(token)
        this.props.setToken(token);
        this.props.history.push('/roulette');
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
                
                <button>{this.getButtonType()}</button>
            </form>
            
                <div>
                <NavLink to="/signup" >{this.getAccountType()}</NavLink>
                </div>

                <div>
                <NavLink to="/signin" >{this.geTypeMessage()}</NavLink>
                </div>
                
            <footer>
                <p>
                    copyright place holder
                </p>
                <NavLink to='/aboutus'>About Us</NavLink>
            </footer>
            </section>
        )
    }
};
 
export default Landing;

