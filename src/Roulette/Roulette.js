import React, { Component } from 'react';
// import { Wheel } from 'react-custom-roulette'

class Roulette extends Component {
    state = { query: '', brewery: []}

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
        this.setState({ brewery: data[0]})
        console.log("search", this.state)
    }
    
    handleQueryUpdate = async (event) => {
        await this.setState({ query: event.target.value });
    }

    render() { 

        return ( 
            <>
            <h1>Roulette Page</h1>

            <form>
                <input type="text" onChange={this.handleQueryUpdate}></input>
                <button onClick={this.handleSearch}>Search</button>
            </form>
           
            <div className="roulette-wheel">
                
            </div>
            </>
         );
    }
}
 
export default Roulette;
