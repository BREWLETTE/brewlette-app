import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { addBrewToUser,updateBreweryData } from '../fetch-utils.js';

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
        await this.setState({brewery:this.props.brewery})
        // console.log("LOOK???",this.props)
    };
    token = this.props.token;
    breweryId = this.props.brewery.brewery_id;

    handleAddNewbrew = async () => {
            await addBrewToUser(this.token,{
            brewery_id: this.props.brewery.brewery_id,
            name: this.props.brewery.brewery_name,
            visited: new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }),
            favorited: false
        })
        // console.log('it went throuh!!!!!!!!!!', data)
    };

    handleUpdateFave = async (event) =>{
          event.preventDefault();
          
         const updatedData = {
            brewery_id: 3116,  
            favorited: true
          }
          console.log('????????',updatedData);
        await updateBreweryData(this.token, updatedData)
          
    }
    
    render() { 
        return ( 
            <main>
                <section className="been-here">This is one of your favorites!</section>
                <section className="map"></section>
                <section className="info">
                    <h1>{this.props.brewery.brewery_name}</h1>
                    <iframe src={this.props.brewery.five_mile_proxylink} title="description"></iframe>
                    <p>{this.props.brewery.url}</p>
                    <p>{this.props.brewery.phone_number}</p>
                    <p>{this.props.brewery.address},{this.props.city},{this.props.brewery.state}</p>

                </section>
                <section className="button-box">
                    <button onClick={this.handleAddNewbrew}>WE GOING</button>
                    <button onClick={this.handleUpdateFave}>Favorite</button>

                    <NavLink to={'/roulette'}>
                        <button>Spin Again</button>
                    </NavLink>
                </section>
            </main>
         );
    }
}
 
export default Detail;