import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles/style'

const NavBar = () => {
  return (
    <nav style={styles.navigationContainer}>
        <Link to={"/"} style={{ textDecoration: "none", fontWeight: 'bold' }} className='nav-child'>HOME</Link>
        <Link to="/photos" style={{ textDecoration: "none", fontWeight: 'bold' }} className='nav-child'>PHOTO</Link>
        <Link to="/videos" style={{ textDecoration: "none", fontWeight: 'bold' }} className='nav-child'>VIDEOS</Link>
        <Link to="/donation" style={{ textDecoration: "none", fontWeight: 'bold' }} className='nav-child'>DONATION</Link>
        <Link to="/about" style={{ textDecoration: "none", fontWeight: 'bold' }} className='nav-child'>ABOUT US</Link>
      </nav>
  )
}

export default NavBar