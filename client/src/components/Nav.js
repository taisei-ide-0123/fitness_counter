import React, { Component } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authActions'

class Nav extends Component {
  onLogoutClick = (e) => {
    e.preventDefault()
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
        <nav>
          <Link style={{ color: '#ff5722', textDecoration: 'none' }} to="/">
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
            <Link>
              <li
                onClick={this.onLogoutClick}
                style={{
                  color: '#ff5722',
                  textDecoration: 'none',
                  listStyle: 'none',
                  fontSize: '20px',
                }}
              >
                Logout
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    )
  }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Nav)
