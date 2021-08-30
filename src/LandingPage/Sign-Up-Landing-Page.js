// import { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import BrewletteLogo from '../assets/BrewletteLogo.png'
// import './Landing-Page.css'
// import { getToken } from '../fetch-utils.js';



// class SignUp extends Component {
//     state = { email: '', password: '' }
    
//     handleSubmit = async (event) => {
//         event.preventDefault();
        
//         const token = await getToken(
//             {
//                 email: this.state.email,
//                 password: this.state.password,
//             },
//             this.props.type
//         );
//         console.log(token)
//         this.props.setToken(token);
//         // this.props.history.push('/roulette');
//     };
//     render() { 
//         return ( 
//             <section className='landing'>
//             <div className='logo'>
//                 <img src={ BrewletteLogo } alt="hero"></img>
//             </div>
//             <p className='instructions'>
//                 PLEASE SIGN UP HERE-- AGE PARAMETERS
//             </p>
//             <form onSubmit={this.handleSubmit}>
//                 email: <input type="email" /> 
//                 password: <input type="password" /> 
                
//                 <button>Submit</button>
//             </form>

//             <NavLink to="/">Go Back To Sign In Page!</NavLink>
//             <footer>
//                 <p>
//                     copyright place holder
//                 </p>
//                 <NavLink to='/aboutus'>About Us</NavLink>
//             </footer>
//             </section>
//          );
//     }
// }
// export default SignUp;