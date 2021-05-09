import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav'
import RankingMenu from './RankingMenu'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../actions/authActions'

class DumbellRaiseRanking extends Component {
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
      .sort((a, b) =>
        a.total_dumbbell_raise_count < b.total_dumbbell_raise_count ? 1 : -1,
      )
      .map((user, i) => {
        return (
          <tr>
            <td style={{ fontSize: '50px' }}>{i + 1}</td>
            <td>
              <div
                className="col s12"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    height: '70px',
                    width: '70px',
                    border: '1px solid #ff5722',
                    borderRadius: '50%',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={user.img}
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
            </td>
            <td style={{ fontSize: '25px' }}>{user.name}</td>
            <td style={{ fontSize: '25px' }}>
              {user.total_dumbbell_raise_count}
            </td>
          </tr>
        )
      })
  }

  render() {
    return (
      <div>
        <Nav />
        <h3 className="bold" style={{ fontFamily: 'GillSans' }}>
          DUMBBELL RAISE RANKING
        </h3>
        <div className="container">
          <div className="card">
            <RankingMenu />
            <table className="table highlight centered">
              <thead>
                <tr className="deep-orange lighten-1">
                  <th>Rank</th>
                  <th>Icon</th>
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

DumbellRaiseRanking.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { setCurrentUser })(DumbellRaiseRanking)
