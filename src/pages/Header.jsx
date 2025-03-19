import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import logo from '../assets/Z-bold-no-bg.png'
function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="Zenith Logo" />
       <nav className='navbar'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
       </nav>
    </header>
  )
}

export default Header