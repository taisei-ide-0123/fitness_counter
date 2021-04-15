import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import Nav from '../Nav'
import SQUAT from '../../Squat.jpg'
import PUSHUP from '../../PushUp.jpg'

class Menu extends Component {
  onLogoutClick = (e) => {
    e.preventDefault()
    this.props.logoutUser()
  }

  render() {
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={SQUAT} alt="squat" />
                  <span class="card-title">SQUAT</span>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    <Link
                      to="/squat"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      SQUAT
                    </Link>
                    <i class="material-icons right">more_vert</i>
                  </span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    <Link
                      to="/squat"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      SQUAT
                    </Link>
                    <i class="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={PUSHUP} alt="push up" />
                  <span class="card-title">PUSH UP</span>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    <Link
                      to="/pushup"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      PUSH UP
                    </Link>
                    <i class="material-icons right">more_vert</i>
                  </span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    <Link
                      to="/pushup"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      PUSH UP
                    </Link>
                    <i class="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Menu
