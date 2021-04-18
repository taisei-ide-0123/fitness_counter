import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from './actions/authActions'

class Menu extends Component {
  render() {
    const { user } = this.props.auth

    return (
      <>
        <Nav />
        <div style={{ height: '75vh' }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(' ')[0]} &nbsp;
                {user.name.split(' ')[1]}
                <p className="flow-text grey-text text-darken-1">
                  You are logged into a full-stack{' '}
                  <span style={{ fontFamily: 'monospace' }}>MERN</span> app 👏
                </p>
              </h4>
            </div>
          </div>
        </div>
      </>
    )
  }
}

Menu.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Menu)
