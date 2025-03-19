import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
function Header() {
  return (
  <>
    <header className='header'>
       <h1><a href="#">TEAM ZENITH</a></h1>
    </header>
       <nav className='navbar'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
       </nav>
    </>
  )
}

export default Header