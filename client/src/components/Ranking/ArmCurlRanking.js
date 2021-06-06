import React, { Component } from 'react'
import axios from 'axios'
import ArmCurlNav from '../Nav/ArmCurlNav'
import RankingMenu from './RankingMenu'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../actions/authActions'

class ArmCurlRanking extends Component {
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
        a.total_arm_curl_count < b.total_arm_curl_count ? 1 : -1,
      )
      .map((user, i) => {
        return (
          <tr>
            <td style={{ fontSize: '30px' }}>{i + 1}</td>
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
                    height: '50px',
                    width: '50px',
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
            <td style={{ fontSize: '20px' }}>{user.name}</td>
            <td style={{ fontSize: '20px' }}>{user.total_arm_curl_count}</td>
          </tr>
        )
      })
  }

  render() {
    return (
      <div>
        <ArmCurlNav />
        <div className="container">
          <div className="white">
            <RankingMenu />
            <table className="table highlight centered">
              <thead>
                <tr className="white">
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

ArmCurlRanking.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { setCurrentUser })(ArmCurlRanking)
