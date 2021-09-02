import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { addBrewToUser,updateBreweryData } from '../fetch-utils.js';

class Detail extends Component {
    state = { brewery: {}, favorite: false,}


    componentDidMount = async () => {
        // await this.setState({brewery:this.props.brewery})
        // console.log("LOOK???",this.state.id)
        // await this.handleAddNewbrew()
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
            <main>
                              {/* COme back to this BELOW */}
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