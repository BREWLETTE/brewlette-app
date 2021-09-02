import React, { Component } from 'react';
import './About.css';
import beerIcon1 from '../src/assets/beerIcon1.png';
import beerIcon2 from '../src/assets/beerIcon2.png';
import beerIcon3 from '../src/assets/beerIcon3.png';
import beerIcon4 from '../src/assets/beerIcon4.png';
import beerIcon5 from '../src/assets/beerIcon5.png';
import GitHub_Logo from '../src/assets/GitHub_Logo.png';
import linkdinbtn from '../src/assets/linkdinbtn.jpg';


class About extends Component {
    render() { 
        return ( 
        <section className="container">
            <p>Brewlette is a major problem solving app built for you by major problem solvers. Have you ever been in a cool new or previous spot but no one will make a deicision on where to grab a brew? You (21 and over) are who we had in mind when we created this app!! Brewlette is a roulette randomizer that will get you a place to enjoy a drink in no time. With a couple clicks you will be able to get some details about a brewery picked by yours truly, Brewlette. It’s as simple as logging in or signing up(if you’re 21 or over), inputting your location, and clicking spin! There are features for you to save breweries you enjoyed so you can visit them again! Brewlette, version 1.0.0 — solving your brewery selections spin by spin.</p>
            
            <section className='name-section'>
                <img src={ beerIcon1 } alt ='beer' className='beer'/>
                <section>
                    <h4>Triana</h4>
                    <a className='linkdin' href="http://www.linkedin.com/in/triana-cerda/">
                        <img src={ linkdinbtn } alt="Visit my LinkedIn Profile"/>
                    </a>

                    <a className="github-button" 
                        href="https://github.com/trianacerda" 
                        data-color-scheme="no-preference: dark; light: dark; dark: dark;" 
                        aria-label="Follow @trianacerda on GitHub"> 
                        <img src={ GitHub_Logo} alt='github'/>
                    </a>
                </section>
            </section>

            <section className='name-section'>
                <img src={ beerIcon2 } alt ='beer' className='beer'/>
                <section>
                    <h4>Cristian</h4>
                    <a className='linkdin' href="https://www.linkedin.com/in/cristianmontesmujica/">
                        <img src={ linkdinbtn } alt="Visit my LinkedIn Profile" />
                    </a>
    
                    <a className="github-button" 
                        href="https://github.com/cristian-montes" 
                        data-color-scheme="no-preference: dark; light: dark; dark: dark;" 
                        aria-label="Follow @Cristian Montes on GitHub">
                        <img src={ GitHub_Logo} alt='github'/>
                    </a>
                </section>
            </section>

            <section className='name-section'>
                <img src={ beerIcon3 } alt ='beer' className='beer'/>
                    <section>
                        <h4>Simon</h4>
                        <a className='linkdin' href="https://www.linkedin.com/in/simonbishopkaine/">
                            <img src={ linkdinbtn } alt="Visit my LinkedIn Profile" />
                        </a>

                        <a className="github-button" 
                            href="https://github.com/simonkaine" 
                            data-color-scheme="no-preference: dark; light: dark; dark: dark;" 
                            aria-label="Follow @simonkaine on GitHub">
                            <img src={ GitHub_Logo} alt='github'/>
                        </a>
                    </section>
            </section>

            <section className='name-section'>
                <img src={ beerIcon5 } alt ='beer' className='beer'/>   
                <section>
                    <h4>Alice</h4>
                    <a className='linkdin' href="http://www.linkedin.com/in/aliceretz/">
                        <img src={ linkdinbtn } alt="Visit my LinkedIn Profile" />
                    </a>

                    <a className="github-button" 
                        href="https://github.com/Alice-Retz" 
                        data-color-scheme="no-preference: dark; light: dark; dark: dark;" 
                        aria-label="Follow @Alice Retz(she/they) on GitHub">
                        <img src={ GitHub_Logo} alt='github'/>
                    </a>

                    {/* <a 
                        href="https://twitter.com/AliceRetz?ref_src=twsrc%5Etfw" 
                        className="twitter-follow-button" 
                        data-show-count="false">
                        Follow @AliceRetz
                    </a> */}
                    {/* <script 
                        async 
                        src="https://platform.twitter.com/widgets.js" 
                        charSet="utf-8">
                    </script> */}
                </section>   
            </section> 

            <section className='name-section'>
                <img src={ beerIcon4 } alt ='beer' className='beer'/>
                    <section>
                        <h4>Aemilius</h4>
                        <a className='linkdin' href="https://www.linkedin.com/in/aemilius-morgan-1b0172171/">
                        <img src={ linkdinbtn } alt="Visit my LinkedIn Profile" />
                        </a>

                        <a className="github-button" 
                            href="https://github.com/AemiliusM" 
                            data-color-scheme="no-preference: dark; light: dark; dark: dark;" 
                            aria-label="Follow @AemiliusM on GitHub">
                            <img src={ GitHub_Logo} alt='github'/>
                        </a>
                    </section> 
            </section>


        </section>
        );
    }
}
 
export default About;
