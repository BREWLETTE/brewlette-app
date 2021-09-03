import React, { Component } from 'react';
import { getBreweries} from '../fetch-utils'

class Profile extends Component {
    state = { brews: []  }
    componentDidMount = ()=>{
        this.fetchUserBrews();
    }

    token = JSON.parse(localStorage.getItem('BREWTOKEN'));

    fetchUserBrews= async () =>{
        const userBrews = await getBreweries (this.props.token);
        // console.log(userBrews);
        this.setState({brews: userBrews})
        console.log(this.state.brews)
    }
    render() { 
        return (
            <>
              <h1>PROFILE</h1>
                <section>
                    {this.state.brews.map((item)=>(
                        <div key={item.id}>
                                <p>{item.name}</p>
                                <p>Visited:{item.visited}</p>
                        </div>
                    ))}
                </section>
            </>
        );
    }
}
 
export default Profile;