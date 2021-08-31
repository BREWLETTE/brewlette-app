import React, { Component } from 'react';
// import { Wheel } from 'react-custom-roulette'

class Roulette extends Component {
    state = { query: null, brewery: []}

    componentDidMount(){
        this.fetchData();
      }

    fetchData = async () => {
        let url = 'http://localhost:7890/breweryinfo';
        const searchOrderParam = new URLSearchParams();

        if (this.state.query) {
            searchOrderParam.set('search', this.state.query);
        }
        
        url = url + `?${searchOrderParam.toString()}`;
        let response = await fetch(url);
        let data = await response.json()
        this.setState({ brewery: data})
        console.log(this.state.brewery)
    }
    
    handleQueryUpdate = (event) => {
        this.setState({ query: event.target.value });
    }

    render() { 
        return ( 
            <>
            <h1>Roulette Page</h1>

            <form>
                <input type="text" onChange={this.handleQueryUpdate}></input>
                <button onClick={this.fetchData}>Search</button>
            </form>
           
            <div className="roulette-wheel">
                
            </div>
            </>
         );
    }
}
 
export default Roulette;
