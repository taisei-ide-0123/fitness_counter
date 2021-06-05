import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faCrown,
  faClipboard,
  faUser,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

if (typeof window !== 'undefined') {
  window.$ = $
  window.jQuery = $
  require('materialize-css')
}

class Nav extends Component {
  componentDidMount() {
    $('.sidenav').sidenav()
  }

  onLogoutClick = (e) => {
    e.preventDefault()
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper red darken-1">
            <Link
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </Link>

            <Link
              className="brand-logo center"
              style={{ color: '#fff', textDecoration: 'none' }}
              to="/my-records"
            >
              Training Record
            </Link>
            <ul className="right hide-on-med-and-down" id="nav-mobile">
              <li>
                <Link
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    listStyle: 'none',
                    fontSize: '20px',
                  }}
                  to="/menu"
                >
                  <FontAwesomeIcon icon={faHome} />
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    listStyle: 'none',
                    fontSize: '20px',
                  }}
                  to="/squat-ranking"
                >
                  <FontAwesomeIcon icon={faCrown} />
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    listStyle: 'none',
                    fontSize: '20px',
                  }}
                  to="/my-records"
                >
                  <FontAwesomeIcon icon={faClipboard} />
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    listStyle: 'none',
                    fontSize: '20px',
                  }}
                  to="/profile"
                >
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.onLogoutClick}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    listStyle: 'none',
                    fontSize: '20px',
                  }}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
          <Link
            style={{
              color: '#000',
              textDecoration: 'none',
              listStyle: 'none',
              fontSize: '20px',
            }}
            to="/menu"
          >
            <li>
              Home&nbsp;
              <FontAwesomeIcon icon={faHome} />
            </li>
          </Link>
          <Link
            style={{
              color: '#000',
              textDecoration: 'none',
              listStyle: 'none',
              fontSize: '20px',
            }}
            to="/squat-ranking"
          >
            <li>
              Ranking&nbsp;
              <FontAwesomeIcon icon={faCrown} />
            </li>
          </Link>
          <Link
            style={{
              color: '#000',
              textDecoration: 'none',
              listStyle: 'none',
              fontSize: '20px',
            }}
            to="/my-records"
          >
            <li>
              Record&nbsp;
              <FontAwesomeIcon icon={faClipboard} />
            </li>
          </Link>
          <Link
            style={{
              color: '#000',
              textDecoration: 'none',
              listStyle: 'none',
              fontSize: '20px',
            }}
            to="/profile"
          >
            <li>
              Profile&nbsp;
              <FontAwesomeIcon icon={faUser} />
            </li>
          </Link>
          <Link
            onClick={this.onLogoutClick}
            style={{
              color: '#000',
              textDecoration: 'none',
              listStyle: 'none',
              fontSize: '20px',
            }}
          >
            <li>
              Logout&nbsp;
              <FontAwesomeIcon icon={faSignOutAlt} />
            </li>
          </Link>
        </ul>
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
