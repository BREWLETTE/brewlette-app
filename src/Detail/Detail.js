import React, { Component } from 'react';
import { getBreweries, createFavorite, updateBreweryData } from '../fetch-utils.js';

class Detail extends Component {
    state = { brewery: {}, favorite: false }

    // loadData = async () => {
    //     const { id } = this.props.match.params;
    //     const url = `http://URL/API_KEY/${id}`;
    //     const resp = await fetch(url);
    //     const data = await resp.json();
    //     setTimeout(() => {
    //         this.setState({ data, loading: false });
    //       }, 1000);
    // };

    componentDidMount = async () => {
        // this.loadData();
        console.log("LOOK???",this.props)
    };

    // fetchBreweriesData = async () => {
    //     const data = await getBreweries(this.props.token);
    //     this.setState({ brewery: data });
    // };
    
    render() { 
        return ( 
            <main>
                              {/* COme back to this BELOW */}
                <section className="been-here">This is one of your favorites!</section> 
                
                <section className="map"></section>
                <section className="info">
                    <h1>{this.props.brewery.brewery_name}</h1>
                    {/* <p /><h2>{brewery.url}</h2> */}
                    {/* {brewery.street}, {brewery.city} */}
                    {/* <p />{brewery.reviewlink} */}
                </section>
                <section className="button-box">
                    <button>Favorite</button>
                    <button>Spin Again</button>
                </section>
            </main>
         );
    }
}
 
export default Detail;