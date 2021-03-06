import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

if (typeof window !== 'undefined') {
  window.$ = $
  window.jQuery = $
  require('materialize-css')
}

class LogoutNav extends Component {
  componentDidMount() {
    $('.sidenav').sidenav()
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper red darken-1">
            <Link
              href="#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </Link>

            <Link
              className="brand-logo center"
              style={{ color: '#fff', textDecoration: 'none' }}
              to="/menu"
            >
              Fithabit
            </Link>
            <ul className="right hide-on-med-and-down" id="nav-mobile">
              <Link
                to="/login"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  listStyle: 'none',
                  fontSize: '20px',
                }}
              >
                <li>
                  <FontAwesomeIcon icon={faSignInAlt} />
                </li>
              </Link>
            </ul>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
          <Link
            to="/login"
            style={{
              color: '#000',
              textDecoration: 'none',
              listStyle: 'none',
              fontSize: '20px',
            }}
          >
            <li>
              Login&nbsp;
              <FontAwesomeIcon icon={faSignInAlt} />
            </li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default LogoutNav
