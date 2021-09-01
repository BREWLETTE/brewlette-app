// import { render } from '@testing-library/react'
// import React, { Component } from 'react';
import {useState} from 'react'
import { Wheel } from 'react-custom-roulette'


const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '1', style: { backgroundColor: 'white' } },
  { option: '2' },
]

function Spinner(props) { 
    const [mustSpin, setMustSpin] = useState(false);
    
    return (
        <>
            <Wheel
                mustStartSpinning={props.realSpinny}
                prizeNumber={3}
                data={data}
                backgroundColors={['#3e3e3e', '#df3428']}
                textColors={['#ffffff']}
                onStopSpinning={() => {
                    setMustSpin(false)}
                }
                /> 
            <button onClick={props.handleSpin}>SPIN</button>
        </>
    )
    
    
}

export default Spinner;

// class Spinner extends Component {
//     state = { 
//         mustSpin: false,
//     }
//     render() { 
//         return ( 
//             <>
//                 <Wheel
//                 // onClick={this.props.onClick}
//                 mustStartSpinning={this.props.realSpinny}
//                 prizeNumber={3}
//                 data={data}
//                 backgroundColors={['#3e3e3e', '#df3428']}
//                 textColors={['#ffffff']}
//                 onStopSpinning={this.state.mustSpin}
//                 /> 
//                 <button onClick={this.props.handleSpin}>SPIN</button>
//             </>
//              );
//     }
// }
 
// export default Spinner;