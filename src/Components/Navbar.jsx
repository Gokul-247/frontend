import React from 'react'
import "../Assets/CSS/navbar.css"
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ViewPage">View</Link></li>
            <li><Link to="/CreatePage">Create</Link></li>
            <li><Link to="/UpdatePage">Update</Link></li>
            <li><Link to="/DeletePage">Delete</Link></li>
        </ul>
    </div>
  )
}

export default Navbar