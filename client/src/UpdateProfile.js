import React, { Component, createRef } from 'react'
import axios from 'axios'
import Nav from './components/Nav'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentUser } from './actions/authActions'
import DefaultImg from './DefaultProfile.png'

class UpdateProfile extends Component {
  constructor(props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangeBirthday = this.onChangeBirthday.bind(this)
    this.onChangeProfileImg = this.onChangeProfileImg.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      user: '',
      email: '',
      birthday: '',
      plofile_img: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // console.log(this.props)
    const { user } = this.props.auth
    axios
      .get('api/users/' + user.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          email: response.data.email,
          birthday: response.data.birthday,
          plofile_img: response.data.plofile_img,
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  // 値の更新
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }

  onChangeBirthday(e) {
    this.setState({
      birthday: e.target.value,
    })
  }

  onChangeProfileImg(e) {
    this.setState({
      profile_img: e.target.value,
    })
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  onSubmit(e) {
    console.log(this.props)
    console.log(this.props.auth.user.id)
    e.preventDefault()

    const user = {
      name: this.state.name,
      email: this.state.email,
      birthday: this.state.birthday,
      plofile_img: this.state.profile_img,
    }

    axios
      .put('/api/users/update/' + this.props.auth.user.id, user)
      .then((res) => console.log(res.data))

    // window.location = '/profile'
  }

  render() {
    const uploadedImage = createRef(null)
    const imageUploader = createRef(null)
    // const { user } = this.props.auth

    const handleImageUpload = (e) => {
      const [file] = e.target.files
      this.setState({
        profile_img: e.target.value,
      })
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
              <form onSubmit={this.onSubmit}>
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
                    value={this.state.profile_img}
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
                      onChangeProfileImg={this.onChangeProfileImg}
                    />
                  </div>
                </div>
                {/* name */}
                <div className="input-field col s12">
                  <input
                    type="text"
                    // defaultValue={user.name}
                    value={this.state.name}
                    onChange={this.onChangeName}
                  ></input>
                  <label htmlFor="name">
                    <i className="material-icons left">person</i>Name
                  </label>
                </div>
                {/* email */}
                <div className="input-field col s12">
                  <input
                    type="text"
                    // defaultValue={user.email}
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                  <label htmlFor="email">
                    <i className="material-icons left">mail</i>Email
                  </label>
                </div>
                {/* birthday */}
                <div className="input-field col s12">
                  <input
                    type="text"
                    // defaultValue={user.birthday}
                    value={this.state.birthday}
                    onChange={this.onChangeBirthday}
                  />
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
              </form>
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
