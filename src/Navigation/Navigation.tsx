import '../styles/nav-bar.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import{FaBars, FaTimes} from 'react-icons/fa'


const Navigation = () => {
    const [isMobile, setIsMobile] = useState(false)
  return (
    <nav className='navbar'>
    <h3 className='logo'>iReport</h3>
    <ul className={isMobile ? "nav-links-mobile":"nav-links"} onClick={() => setIsMobile(false)}>
      <Link to='/home' className='home'>
        <li>Home</li>
      </Link>
      <Link to='/report' className='report'>
        <li>Report</li>
      </Link>
      <Link to='/status' className='status'>
        <li>Status</li>
      </Link>
      <Link to='/login' className='login'>
        <li>Login</li>
      </Link>
    </ul>
    <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile? <FaTimes  className='fa-times'/>:<FaBars  className='fa-bars'/>}
    </button>
  </nav>
  )
}

export default Navigation
