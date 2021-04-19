import React, { Component } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

class LogoutNav extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link style={{ color: '#ff5722', textDecoration: 'none' }} to="/menu">
            <h3>Fitness Counter</h3>
          </Link>
          <ul>
            <Link
              style={{
                color: '#ff5722',
                textDecoration: 'none',
                listStyle: 'none',
                fontSize: '20px',
              }}
              to="/profile"
            >
              <li>Profile</li>
            </Link>
            <Link
              to="/login"
              style={{
                color: '#ff5722',
                textDecoration: 'none',
                listStyle: 'none',
                fontSize: '20px',
              }}
            >
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      </div>
    )
  }
}

export default LogoutNav
