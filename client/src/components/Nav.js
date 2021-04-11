import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

class Nav extends Component() {
  render() {
    return (
      <nav>
        <Link
          style={{ color: 'rgb(255, 127, 80)', textDecoration: 'none' }}
          to="/"
        >
          <h1>Count Up</h1>
        </Link>
        <ul className="nav-links">
          <Link
            style={{ color: 'rgb(255, 127, 80)', textDecoration: 'none' }}
            to="/profile"
          >
            <li>Profile</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Nav
