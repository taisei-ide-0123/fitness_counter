import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Camera from './Camera'
import Profile from './Profile'
import Nav from './components/Nav'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
    <Link to="/camera">
      <h1>Camera</h1>
    </Link>
  </div>
)

export default App
