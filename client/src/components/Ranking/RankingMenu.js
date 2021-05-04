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
              <li>Squat</li>
            </Link>
            <Link
              style={{
                color: '#ff5722',
                textDecoration: 'none',
                listStyle: 'none',
                fontSize: '20px',
              }}
              to="/push-up-ranking"
            >
              <li>Push Up</li>
            </Link>
            <Link
              style={{
                color: '#ff5722',
                textDecoration: 'none',
                listStyle: 'none',
                fontSize: '20px',
              }}
              to="/pull-up-ranking"
            >
              <li>Pull Up</li>
            </Link>
            <Link
              style={{
                color: '#ff5722',
                textDecoration: 'none',
                listStyle: 'none',
                fontSize: '20px',
              }}
              to="/arm-curl-ranking"
            >
              <li>Arm Curl</li>
            </Link>
            <Link
              style={{
                color: '#ff5722',
                textDecoration: 'none',
                listStyle: 'none',
                fontSize: '20px',
              }}
              to="/dumbbell-raise-ranking"
            >
              <li>Dumbbell Raise</li>
            </Link>
          </ul>
        </nav>
      </div>
    )
  }
}

export default RankingMenu
