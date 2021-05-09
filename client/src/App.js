import React from 'react'
import './App.css'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'

import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/private-route/PrivateRoute'

import Squat from './sketches/Squat'
import PushUp from './sketches/PushUp'
import PullUp from './sketches/PullUp'
import ArmCurl from './sketches/ArmCurl'
import DumbbellRaise from './sketches/DumbbellRaise'

// import Profile from './Profile'
import UpdateProfile from './UpdateProfile'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Menu from './components/Menu/Menu'
import Home from './components/Menu/Home'
import Record from './Record'
import Ranking from './components/Ranking/SquatRanking'
import PushUpRanking from './components/Ranking/PushUpRanking'
import PullUpRanking from './components/Ranking/PullUpRanking'
import ArmCurlRanking from './components/Ranking/ArmCurlRanking'
import DumbbellRaiseRanking from './components/Ranking/DumbbellRaiseRanking'

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
            <PrivateRoute path="/menu" exact component={Menu} />
            <PrivateRoute path="/squat" component={Squat} />
            <PrivateRoute path="/push-up" component={PushUp} />
            <PrivateRoute path="/pull-up" component={PullUp} />
            <PrivateRoute path="/arm-curl" component={ArmCurl} />
            <PrivateRoute path="/dumbbell-raise" component={DumbbellRaise} />
            {/* <PrivateRoute path="/profile" component={Profile} /> */}
            <PrivateRoute path="/profile" component={UpdateProfile} />
            <PrivateRoute path="/my-records" component={Record} />
            <PrivateRoute exact path="/squat-ranking" component={Ranking} />
            <PrivateRoute
              exact
              path="/push-up-ranking"
              component={PushUpRanking}
            />
            <PrivateRoute
              exact
              path="/pull-up-ranking"
              component={PullUpRanking}
            />
            <PrivateRoute
              exact
              path="/arm-curl-ranking"
              component={ArmCurlRanking}
            />
            <PrivateRoute
              exact
              path="/dumbbell-raise-ranking"
              component={DumbbellRaiseRanking}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
