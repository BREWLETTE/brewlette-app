import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Spinner from '../Spinner/Spinner.js';
import './Roulette.css';
import audio from '../assets/can-open-1.mp3';

class Roulette extends Component {
    state = { query: '', 
    brewery: [],
    spinny:false,
}

    componentDidMount(){
        this.fetchData();
      }

    fetchData = async () => {
        let url = 'https://the-brewlette.herokuapp.com/api/allbreweryinfo'
        const userQuery = this.state.query;
        const fullUrl = url + `?search=${userQuery}`;
        let response = await fetch(fullUrl, {
            method:'GET',
            headers:{
                'Authorization': this.props.token,
            }
        });
        let data = await response.json();

        return data;
    }

    handleQueryUpdate = async (event) => {
        await this.setState({ query: event.target.value });
    }

    handleSpinClick = async (e) => {
        e.preventDefault();
        const data = await this.fetchData();
        new Audio(audio).play();
        const newPrizeNumber = Math.floor(Math.random() * data.length)
        await this.setState({ brewery: data[newPrizeNumber], spinny: true})
        await this.setState({spinny:false})
        this.props.stateHandler(this.state.brewery)
      } 

      logout = () => {
        localStorage.removeItem('BREWTOKEN');
        this.setState({ token: '' });
    };

    render() { 

        return ( 

            <section className="container">
            
                <h1>Let's Play Brewlette!</h1>

                <form>
                    <input placeholder="city, state" type="text" onChange={this.handleQueryUpdate}></input>
                </form>

                <div className="roulette-wheel">
                    <Spinner 
                        brewData={this.state.brewery}
                        handleSpin={this.handleSpinClick}
                        realSpinny = {this.state.spinny}
                    />
                </div>
                
                <div className="brewery-box">
                    <NavLink to={'/detail'}>
                        <h3>{this.state.brewery.brewery_name}</h3>
                        <p>{this.state.brewery.url}</p> 
                        <p>{this.state.brewery.address} {this.state.brewery.city} {this.state.brewery.state}</p> 
                        <p>{this.state.brewery.reviewlink}</p>
                    </NavLink>
                </div>

                <div className="logout-button">
                    <Link to="/" onClick={this.logout}>
                        Logout{' '}
                    </Link>
                </div>

            </section>

         );
    }
}
 
export default Roulette;
