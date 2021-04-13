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
            <h3>Fitness Counter</h3>
          </Link>
          <ul>
            <Link
              style={{
                color: 'rgb(255, 127, 80)',
                textDecoration: 'none',
                listStyle: 'none',
                fontSize: '20px',
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
