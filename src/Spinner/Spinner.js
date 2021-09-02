// import { render } from '@testing-library/react'
// import React, { Component } from 'react';
import {useState} from 'react'
import { Wheel } from 'react-custom-roulette'




function Spinner(props) { 
    const [mustSpin, setMustSpin] = useState(false);
    const data = [
        { option: 'brewlette', style: { backgroundColor: '#1C2018', textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#0B1953',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#43281C',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#580F01',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#782305',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#C7941D',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#1C2018', textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#0B1953',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#43281C',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#580F01',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#782305',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#C7941D',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#1C2018', textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#0B1953',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#43281C',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#580F01',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#782305',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#C7941D',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#1C2018', textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#0B1953',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#43281C',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#580F01',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#782305',textColor: 'white' } },
        { option: 'brewlette', style: { backgroundColor: '#C7941D',textColor: 'white' } },
      ]
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