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

        if(token === undefined){
            alert('Name, Email or Password does not match')
            localStorage.removeItem('BREWTOKEN');
            this.setState({ token: '' });
        } else {
            this.props.setToken(token);
            this.props.history.push('/roulette');
        }
    };

    render() { 
        return ( 
            <>
                <section className='container'>

                    <div className='logo'>
                        <img src={ BrewletteLogo } alt="hero"></img>
                    </div>

                    <p className='instructions'>
                    Welcome to Brewlette!! A fun way to find a spot to enjoy a nice brew! Just go ahead and login or sign up to get access. After you’re logged in you can just let us know where you’re looking and click “spin”. This will pick a random brewery for you to enjoy. Favorite a brewery that you would like to visit again! Thanks for taking a gamble on us.
                    </p>

                    <form onSubmit={this.handleSubmit}>

                        <input placeholder="Name" onChange={(e) => this.setState({ name: e.target.value})} type='name' required /> 
                        <input placeholder="E-mail" onChange={(e) => this.setState({ email: e.target.value})} type="email" required /> 
                        <input placeholder="Password" onChange={(e) => this.setState({ password: e.target.value})} type="password" required /> 
                        
                        <button>{this.getButtonType()}</button>
                        
                    </form>
                    
                    <div className="navlink">
                        <NavLink to="/signup" >{this.getAccountType()}</NavLink>
                    </div>

                    <div className="navlink">
                        <NavLink to="/signin" >{this.geTypeMessage()}</NavLink>
                    </div>

                </section>
            </>
        )
    }
};
 
export default Landing;

