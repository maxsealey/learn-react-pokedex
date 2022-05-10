import React, { Component } from 'react'
import '../../App.css'

export default class NavBar extends Component {
  render() {
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top' 
            style={{ height:'50px', display:'flex', justifyContent:'space-around' }}>
            <a href="#" style={{ color:'white', textDecoration:'none', margin:'15px 0px 0px 15px',cursor:'pointer' }}>
            <h5>Pokedex - Gotta Catch 'Em All!</h5></a></nav>
        </div>
    )
  }
}
