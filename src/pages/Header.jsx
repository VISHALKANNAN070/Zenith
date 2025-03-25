import React from 'react'
import '../styles/header.css'
import logo from '/public/Tz_White-removebg.png'
function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="Zenith Logo" />
      <nav className='navbar'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header