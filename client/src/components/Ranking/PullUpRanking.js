import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav'
import RankingMenu from './RankingMenu'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../actions/authActions'

class PullUpRanking extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  componentDidMount() {
    axios
      .get('/api/users/squat/ranking/')
      .then((response) => {
        this.setState({ users: response.data })
        // console.log(response.data)
        // console.log(this.state.records)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  rankList() {
    return this.state.users
      .sort((a, b) => (a.total_pull_up_count < b.total_pull_up_count ? 1 : -1))
      .map((user, i) => {
        return (
          <tr>
            <td>{i + 1}</td>
            <td>{user.name}</td>
            <td>{user.total_pull_up_count}</td>
          </tr>
        )
      })
  }

  render() {
    return (
      <div>
        <Nav />
        <h3 className="bold" style={{ fontFamily: 'GillSans' }}>
          PULL UP RANKING
        </h3>
        <div className="container">
          <div className="card">
            <RankingMenu />
            <table className="table highlight centered">
              <thead>
                <tr className="deep-orange lighten-1">
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>{this.rankList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

PullUpRanking.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { setCurrentUser })(PullUpRanking)