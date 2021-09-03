import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
    
            <footer>
                <NavLink to='/aboutus'>About Us</NavLink>
                <p>Brewlette Rocks! &copy; copyright 2021 </p>
            </footer>
            
        )
    }
}
