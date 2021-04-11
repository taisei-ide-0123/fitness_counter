import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import classnames from 'classnames'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      })
    }
  }

  // 値の更新
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault() // 送信ボタンがクリックされたときにページが再読み込みされないようにする

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }
    this.props.registerUser(newUser, this.props.history)
  }

  render() {
    const errors = this.state.errors

    return (
      <div className="container">
        <Link to="/">home</Link>
        <Link to="/login">Log in</Link>

        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <input
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
              className={classnames('', {
                invalid: errors.name,
              })}
            />
            <label htmlFor="name">Name</label>
            <span>{errors.name}</span>
          </div>
          <div>
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames('', {
                invalid: errors.email,
              })}
            />
            <label htmlFor="email">Email</label>
            <span>{errors.email}</span>
          </div>
          <div>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames('', {
                invalid: errors.password,
              })}
            />
            <label htmlFor="password">Password</label>
            <span>{errors.password}</span>
          </div>
          <div>
            <input
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
              className={classnames('', {
                invalid: errors.password2,
              })}
            />
            <label htmlFor="password2">Confirm Password</label>
            <span>{errors.password2}</span>
          </div>
          <div>
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    )
  }
}

// constructorで型を定義することができないためprop-typesパッケージを使用して定義する。
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

// stateをpropsとして扱うことができる
// 親コンポーネントからpropsとして引き継がなくても子コンポーネントからすぐに使える
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register))
