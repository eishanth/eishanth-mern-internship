import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
export const Header = () => {
  return (
    <div className='header'>
        <div className='navbar'>
            <h2 className='title'>Ecommerce</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/users'>Users</Link></li>
            </ul>
        </div>
    </div>
  )
}
