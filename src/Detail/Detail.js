import React, { Component } from 'react';
import { getBreweries, createFavorite, updateBreweryData } from '../fetch-utils.js';

class Detail extends Component {
    state = { brewery: [], favorite: false }

    componentDidMount = async () => {
        this.fetchBreweriesData();
    };

    fetchBreweriesData = async () => {
        const data = await getBreweries(this.props.token);
        this.setState({ brewery: data });
    };
    
    render() { 
        return ( 
            <main>
                <section className="been-here">This is one of your favorites!</section>
                <section className="map"></section>
                <section className="info">
                    <h1>{brewery.name}</h1>
                    <p /><h2>{brewery.url}</h2>
                    {brewery.street}, {brewery.city}
                    <p />{brewery.reviewlink}
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