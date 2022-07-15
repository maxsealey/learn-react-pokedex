import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../../App.scss'


export default class NavBar extends Component {
  render() {
    const navStyle = {height:'70px', display:'flex', justifyContent:'space-between', position:'absolute'}
    const linkStyle = {color:'white', textDecoration:'none',cursor:'pointer'}

    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top' 
            style={navStyle}>
              <a href="#" style={linkStyle}>
              <h3 style={{ margin:'auto', marginLeft:'20px',fontFamily:'Pokemon Solid' }}>Pokedex - Gotta Catch 'Em All!</h3></a>
              <a href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-icon"/>
              </a>
            </nav>
        </div>
    )
  }
}
