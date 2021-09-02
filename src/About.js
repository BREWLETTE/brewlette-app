import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( 
        <>
        <body>
            <p>Brewlette is a major problem solving app built for you by major problem solvers. Have you ever been in a cool new or previous spot but no one will make a deicision on where to grab a brew? You (21 and over) are who we had in mind when we created this app!! Brewlette is a roulette randomizer that will get you a place to enjoy a drink in no time. With a couple clicks you will be able to get some details about a brewery picked by yours truly, Brewlette. It’s as simple as logging in or signing up(if you’re 21 or over), inputting your location, and clicking spin! There are features for you to save breweries you enjoyed so you can visit them again! Brewlette, version 1.0.0 — solving your brewery selections spin by spin.</p>
            <div className='name'>
                <h4>Triana</h4>
                <a href="http://www.linkedin.com/in/triana-cerda/">
                <img src="../assets/linkdinbtn.jpg" alt="Visit my LinkedIn Profile"/>
                </a>

                <a class="github-button" href="https://github.com/trianacerda" data-color-scheme="no-preference: dark; light: dark; dark: dark;" aria-label="Follow @trianacerda on GitHub">
                    Follow @trianacerda
                </a>
            </div>

            <div className='name'>
                <h4>Cristian</h4>
                    <a href="https://www.linkedin.com/in/cristianmontesmujica/">
                    <img src="../assets/linkdinbtn.jpg" alt="Visit my LinkedIn Profile"/>
                    </a>

                    <a class="github-button" href="https://github.com/cristian-montes" data-color-scheme="no-preference: dark; light: dark; dark: dark;" aria-label="Follow @Cristian Montes on GitHub">
                        Follow @cristian-montes
                    </a>
            </div>

            <div className='name'>
                <h4>Simon</h4>
                    <a href="https://www.linkedin.com/in/simonbishopkaine/">
                    <img src="../assets/linkdinbtn.jpg" alt="Visit my LinkedIn Profile"/>
                    </a>

                    <a class="github-button" href="https://github.com/simonkaine" data-color-scheme="no-preference: dark; light: dark; dark: dark;" aria-label="Follow @simonkaine on GitHub">
                        Follow @simonkaine
                    </a>
            </div>

            <div className='name'>
                <h4>Aemilius</h4>
                    <a href="https://www.linkedin.com/in/aemilius-morgan-1b0172171/">
                    <img src="../assets/linkdinbtn.jpg" alt="Visit my LinkedIn Profile"/>
                    </a>

                    <a class="github-button" href="https://github.com/AemiliusM" data-color-scheme="no-preference: dark; light: dark; dark: dark;" aria-label="Follow @AemiliusM on GitHub">
                        Follow @AemiliusM
                    </a>
            </div>

            <div className='name'>
                <h4>Alice</h4>
                    <a href="http://www.linkedin.com/in/aliceretz/">
                    <img src="../assets/linkdinbtn.jpg" alt="Visit my LinkedIn Profile"/>
                    </a>

                    <a class="github-button" href="https://github.com/Alice-Retz" data-color-scheme="no-preference: dark; light: dark; dark: dark;" aria-label="Follow @Alice Retz(she/they) on GitHub">
                        Follow @Alice-Retz
                    </a>

                    <a href="https://twitter.com/AliceRetz?ref_src=twsrc%5Etfw" 
                    class="twitter-follow-button" data-show-count="false">
                        Follow @AliceRetz
                    </a><script async 
                    src="https://platform.twitter.com/widgets.js" 
                    charset="utf-8">
                    </script>
            </div> 

        </body>
        </>
        
        );
    }
}
 
export default About;
