import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentUser } from './actions/authActions'
import Nav from './components/Nav'
class Profile extends Component {
  render() {
    const { user } = this.props.auth
    console.log(user)
    return (
      <div>
        <Nav />
        <div className="container">
          <div style={{ marginTop: '4rem' }} className="row">
            <div className="col s8 offset-s2">
              <div className="col s12" style={{ paddingBottom: '20.250px' }}>
                <h4>
                  <b>Profile&nbsp;</b>
                  <Link to="/update">
                    <i className="material-icons">edit</i>
                  </Link>
                </h4>
              </div>
              <div className="input-field col s12">
                <input
                  disabled
                  id="disabled"
                  type="text"
                  class="validate"
                  placeholder={user.name}
                ></input>
                <label htmlFor="person">
                  <i className="material-icons left">person</i>
                </label>
              </div>
              <div className="input-field col s12">
                <input
                  disabled
                  id="disabled"
                  type="text"
                  class="validate"
                  placeholder={user.email}
                ></input>
                <label htmlFor="email">
                  <i className="material-icons left">mail</i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { setCurrentUser })(Profile)
