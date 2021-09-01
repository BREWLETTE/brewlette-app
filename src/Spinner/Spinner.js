// import { render } from '@testing-library/react'
import React, { Component } from 'react';
import { Wheel } from 'react-custom-roulette'


const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '1', style: { backgroundColor: 'white' } },
  { option: '2' },
]

class Spinner extends Component {
    state = { mustSpin: false }
    render() { 
        return ( 
            <>
                <Wheel
                // onClick={this.props.onClick}
                mustStartSpinning={this.state.mustSpin}
                prizeNumber={3}
                data={data}
                backgroundColors={['#3e3e3e', '#df3428']}
                textColors={['#ffffff']}
                /> 
                <button onClick={this.props.onClick}>SPIN</button>
            </>
             );
    }
}
 
export default Spinner;