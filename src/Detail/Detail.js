import React, { Component } from 'react';
import { getBreweries, createFavorite, updateBreweryData } from '../fetch-utils.js';

class Detail extends Component {
    state = { brewery: {}, favorite: false }

    

    componentDidMount = async () => {
        console.log("LOOK???",this.props)
    };

    
    
    render() { 
        return ( 
            <main>
                <section className="been-here">This is one of your favorites!</section>
                <section className="map"></section>
                <section className="info">
                    <h1>{this.props.brewery.brewery_name}</h1>
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