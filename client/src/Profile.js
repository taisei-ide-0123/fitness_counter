import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentUser } from './actions/authActions'
import Nav from './components/Nav'
class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      email: '',
      birthday: '',
      img: '',
    }
  }

  componentDidMount() {
    // console.log(this.props)
    const { user } = this.props.auth
    axios
      .get('api/users/' + user.id)
      .then((response) => {
        // console.log(response.data)
        this.setState({
          name: response.data.name,
          email: response.data.email,
          birthday: response.data.birthday,
          img: response.data.img,
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="card">
            <div style={{ marginTop: '4rem' }} className="row">
              <div className="col s8 offset-s2">
                <div className="col s12" style={{ paddingBottom: '20.250px' }}>
                  <h4>
                    <b>Your profile</b>
                  </h4>
                </div>
                <div className="input-field col s12">
                  <input
                    disabled
                    id="name"
                    type="text"
                    class="validate"
                    placeholder={this.state.name}
                  ></input>
                  <label htmlFor="person">
                    <i className="material-icons left">person</i>
                  </label>
                </div>
                <div className="input-field col s12">
                  <input
                    disabled
                    id="email"
                    type="text"
                    class="validate"
                    placeholder={this.state.email}
                  ></input>
                  <label htmlFor="email">
                    <i className="material-icons left">mail</i>
                  </label>
                </div>
                <div className="input-field col s12">
                  <input
                    disabled
                    id="birthday"
                    type="text"
                    class="validate"
                    placeholder={this.state.birthday}
                  ></input>
                  <label htmlFor="birthday">
                    <i className="material-icons left">event_note</i>
                  </label>
                </div>
                <div className="col s12" style={{ paddingLeft: '11.250px' }}>
                  <Link to="/update">
                    <button
                      style={{
                        width: '150px',
                        borderRadius: '3px',
                        letterSpacing: '1.5px',
                        marginTop: '1rem',
                        marginBottom: '4rem',
                      }}
                      type="submit"
                      className="btn btn-large waves-effect waves-light hoverable deep-orange"
                    >
                      EDIT
                    </button>
                  </Link>
                </div>
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
