import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link
            style={{ color: 'rgb(255, 127, 80)', textDecoration: 'none' }}
            to="/"
          >
            <h1>Count Up</h1>
          </Link>
          <ul>
            <Link
              style={{
                color: 'rgb(255, 127, 80)',
                textDecoration: 'none',
                listStyle: 'none',
              }}
              to="/profile"
            >
              <li>Profile</li>
            </Link>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
