import React, { Component, createRef } from 'react'
import Nav from './components/Nav'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentUser } from './actions/authActions'
import DefaultImg from './DefaultProfile.png'

class UpdateProfile extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    const uploadedImage = createRef(null)
    const imageUploader = createRef(null)
    const { user } = this.props.auth

    const handleImageUpload = (e) => {
      const [file] = e.target.files
      if (file) {
        const reader = new FileReader()
        const { current } = uploadedImage
        current.file = file
        reader.onload = (e) => {
          current.src = e.target.result
        }
        reader.readAsDataURL(file)
      }
    }

    return (
      <div>
        <Nav />
        <div className="container">
          <div style={{ marginTop: '4rem' }} className="row">
            <div className="col s8 offset-s2">
              <div className="col s12" style={{ paddingBottom: '11.250px' }}>
                <h4>
                  <b>Your plofile</b>
                </h4>
              </div>
              {/* profile img */}
              <div
                className="col s12"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={imageUploader}
                  style={{
                    display: 'none',
                  }}
                />
                <div
                  style={{
                    height: '130px',
                    width: '130px',
                    border: '3px solid #ff5722',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    marginBottom: '20px',
                  }}
                  onClick={() => imageUploader.current.click()}
                >
                  <img
                    src={DefaultImg}
                    ref={uploadedImage}
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'acsolute',
                      borderRadius: '50%',
                    }}
                    alt="profile img"
                  />
                </div>
              </div>
              {/* name */}
              <div className="input-field col s12">
                <input type="text" defaultValue={user.name}></input>
                <label htmlFor="name">
                  <i className="material-icons left">person</i>Name
                </label>
              </div>
              {/* email */}
              <div className="input-field col s12">
                <input type="text" defaultValue={user.email} />
                <label htmlFor="email">
                  <i className="material-icons left">mail</i>Email
                </label>
              </div>
              {/* birthday */}
              <div className="input-field col s12">
                <input type="text" />
                <label htmlFor="birthday">
                  <i className="material-icons left">event_note</i>Birthday
                </label>
              </div>
              <div className="col s12" style={{ paddingLeft: '11.250px' }}>
                <button
                  style={{
                    width: '150px',
                    borderRadius: '3px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem',
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable deep-orange"
                >
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

UpdateProfile.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { setCurrentUser })(UpdateProfile)
