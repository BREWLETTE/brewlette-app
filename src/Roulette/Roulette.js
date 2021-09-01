import React, { Component } from 'react';
// import { Wheel } from 'react-custom-roulette'
import Spinner from '../Spinner/Spinner.js';

class Roulette extends Component {
    state = { query: '', 
    brewery: [],
    spinny:false
}

    componentDidMount(){
        this.fetchData();
      }

    // searchOrderParam = new URLSearchParams();

    fetchData = async () => {
        let url = 'http://localhost:7890/allbreweryinfo';

        // const userQuery = this.searchOrderParam.get('search')
        const userQuery = this.state.query;
        const fullUrl = url + `?search=${userQuery}`;
        let response = await fetch(fullUrl);
        let data = await response.json()
        console.log(data) 
        return data;
    }

    handleSearch = async (e) => {
        e.preventDefault();
        const data = await this.fetchData();
        const oneData = Math.floor(Math.random() * data.length)
        console.log(oneData);
        this.setState({ brewery: data[oneData]})
        // console.log("search", this.state.brewery)
    }
    

    handleQueryUpdate = async (event) => {
        await this.setState({ query: event.target.value });
    }

    handleSpinClick = async (e) => {
        e.preventDefault();

        const data = await this.fetchData();
        const newPrizeNumber = Math.floor(Math.random() * data.length)
        this.setState({ brewery: data[newPrizeNumber], spinny: true})
        this.setState({spinny:false})
        
        console.log(this.state.brewery)
      } 

    render() { 

        return ( 
            <>
            <h1>Roulette Page</h1>

            <form>
                <input type="text" onChange={this.handleQueryUpdate}></input>
                <button onClick={this.handleSearch}>Search</button>
            </form>
           
            
                <Spinner 
                    brewData={this.state.brewery}
                    handleSpin={this.handleSpinClick}
                    realSpinny = {this.state.spinny}
                    />
                

            </>
         );
    }
}
 
export default Roulette;
