import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { addBrewToUser,updateBreweryData } from '../fetch-utils.js';
import './Detail.css'

class Detail extends Component {

    state = { brewery: {}, favorite: false, hidden: false }

    

    componentDidMount = async () => {
        console.log("LOOK???",this.props)
    };

    token = this.props.token;

    handleAddNewbrew = async () => {
         const addedBrew =    await addBrewToUser(this.token,{
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
        await this.setState({brewery: addedBrew})
        await this.setState({hidden: true})
        console.log('it!!!!!!!!!!', this.state.brewery)

    };

    handleUpdateFave = async (event) =>{
          event.preventDefault();

         const updatedData = {
            id: this.state.brewery.id,
            brewery_id:this.state.brewery.brewery_id, 
            name: this.state.brewery.name,
            visited: this.state.brewery.visited,
            favorited: true
          }
          console.log('????????',updatedData);
        await updateBreweryData(this.token, updatedData)
          
    }
    
    render() { 
        return ( 
            <section className="container">

                <iframe width="350" height="315" src={`${this.props.brewery.five_mile_proxylink}`} frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen title="brewery-places"></iframe>

                <section className="map"></section>
                <section className="info">

                    <h1>{this.props.brewery.brewery_name}</h1>
                    <a target="_blank" rel="noreferrer" href={`https://${this.props.brewery.url}`}>{this.props.brewery.url}</a>
                    <p>{this.props.brewery.address} {this.props.brewery.city} {this.props.brewery.state} {this.props.brewery.zip_code}</p> 
                    <p>{this.props.brewery.reviewlink}</p>
                    <p><a id="phone" href={`tel:${this.props.brewery.phone_number}`}>{this.props.brewery.phone_number}</a></p>
                    
                </section>

                <section className="button-box">
                {!this.state.hidden ?
                    <div>
                        <button onClick={this.handleAddNewbrew}>Been here before?</button>
                    </div>
                    : 
                    <div>
                    <button onClick={this.handleUpdateFave}>Save As Favorite</button>
                    </div>
                }
                <NavLink to={'/roulette'}>
                    <button>Spin Again</button>
                </NavLink>
                </section>

            </section>
         );
    }
}
 
export default Detail;
