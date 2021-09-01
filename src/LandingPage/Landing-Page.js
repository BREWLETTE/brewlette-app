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
      
        this.props.setToken(token);
        this.props.history.push('/roulette');
    };

    render() { 
        return ( 
            <>
            <section className='container'>

            <div className='logo'>
                <img src={ BrewletteLogo } alt="hero"></img>
            </div>

            <p className='instructions'>
            Topping cotton candy topping gingerbread jujubes. Shortbread oat cake powder chocolate cake bear claw pudding pastry. Cake croissant donut fruitcake marshmallow chocolate candy canes gingerbread carrot cake.</p>

            <form onSubmit={this.handleSubmit}>

                <input placeholder="Name" onChange={(e) => this.setState({ name: e.target.value})} type='name' /> 
                <input placeholder="E-mail" onChange={(e) => this.setState({ email: e.target.value})} type="email" /> 
                <input placeholder="Password" onChange={(e) => this.setState({ password: e.target.value})} type="password" /> 
                
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

