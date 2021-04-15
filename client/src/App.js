import React from 'react'
import './App.css'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'

import { Provider } from 'react-redux'
import store from './store'

import Camera from './Squat'
import Profile from './Profile'
import Nav from './components/Nav'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PrivateRoute from './components/private-route/PrivateRoute'
import Menu from './components/Menu/Menu'

// トークンをチェックしてユーザーのログインを維持する。
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken
  setAuthToken(token)
  // Decode token and get user info and exp
  const decoded = jwt_decode(token)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))

  // 期限切れのトークンを確認する
  const currentTime = Date.now() / 1000 // ミリ秒単位で取得
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser())
    // Redirect to login
    window.location.href = './login'
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/camera" component={Camera} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/menu" component={Menu} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

const Home = () => (
  <div>
    <Nav />
    <h1>Home Page</h1>
    <div>
      <Link to="/menu">
        <h1>Menu</h1>
      </Link>
      <Link to="/camera">
        <h1>Camera</h1>
      </Link>
    </div>
  </div>
)

export default App
