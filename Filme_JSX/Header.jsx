import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <div className="container">
            <div className="logo">
                <Link to="/">Movies</Link>
            </div>
            <ul className="nav-links">
                <li className='val'>
                    <Link to="/">Watch List</Link>
                </li>
                <li className='val'>
                    <Link to="/Watched">Watched</Link>
                </li>
                <li className='btn'>
                    <Link to="/add">Add</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
