import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../actions/authActions'

class SquatRanking extends Component {
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
      .sort((a, b) => (a.total_squat_count < b.total_squat_count ? 1 : -1))
      .map((user, i) => {
        return (
          <tr>
            <td>{i + 1}</td>
            <td>{user.name}</td>
            <td>{user.total_squat_count}</td>
          </tr>
        )
      })
  }

  render() {
    return (
      <div>
        <Nav />
        <h3 className="bold" style={{ fontFamily: 'GillSans' }}>
          SQUAT RANKING
        </h3>
        <div className="container">
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
    )
  }
}

SquatRanking.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { setCurrentUser })(SquatRanking)