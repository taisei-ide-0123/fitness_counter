import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import classnames from 'classnames'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {},
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      // ログイン時にDashboardに返す
      this.props.history.push('/Dashboard.js')
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password,
    }
    // コンポーネント内でリダイレクトを処理するため、this.props.historyをパラメーターとして渡す必要はない
    this.props.loginUser(userData)
  }

  render() {
    const errors = this.state.errors

    return (
      <div>
        <Link to="/">home</Link>
        <div>
          <Link to="/register">Register</Link>
        </div>
        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames('', {
                invalid: errors.email || errors.emailnotfound,
              })}
            />
            <label htmlFor="email">Email</label>
            <span>
              {errors.email}
              {errors.emailnotfound}
            </span>
          </div>
          <div>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames('', {
                invalid: errors.password || errors.passwordincorrect,
              })}
            />
            <label htmlFor="password">Password</label>
            <span>
              {errors.password}
              {errors.passwordincorrect}
            </span>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})

export default connect(mapStateToProps, { loginUser })(Login)
