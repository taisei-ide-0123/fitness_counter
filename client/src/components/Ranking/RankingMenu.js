import React, { Component } from 'react'
import '../Nav.css'
import { Link } from 'react-router-dom'

class RankingMenu extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <Link
              style={{
                color: '#ff5722',
                textDecoration: 'none',
                listStyle: 'none',
                fontSize: '20px',
              }}
              to="/squat-ranking"
            >
              <li>SQUAT</li>
            </Link>
          </ul>
        </nav>
      </div>
    )
  }
}

export default RankingMenu
