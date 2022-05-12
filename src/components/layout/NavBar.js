import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'


export default class NavBar extends Component {
  render() {
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top' 
            style={{ height:'60px', display:'flex', justifyContent:'space-between', position:'absolute' }}>
            <a href="#" style={{ color:'white', textDecoration:'none',cursor:'pointer' }}>
            <h5 style={{margin:'auto', marginLeft:'20px'}}>Pokedex - Gotta Catch 'Em All!</h5></a><a href="#">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:'white', marginRight:'20px', height:'20px',width:'20px'}}/></a></nav>
        </div>
    )
  }
}
