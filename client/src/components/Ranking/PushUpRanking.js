import React, { Component } from 'react'
import axios from 'axios'
import PushUpNav from '../Nav/PushUpNav'
import RankingMenu from './RankingMenu'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../actions/authActions'

class PushUpRanking extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  componentDidMount() {
    axios
      .get('/api/users/squat/ranking/')
      .then((response) => {
        this.setState({
          users: response.data.sort((a, b) =>
            a.total_push_up_count < b.total_push_up_count ? 1 : -1,
          ),
        })
        // console.log(response.data)
        // console.log(this.state.records)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  rankList() {
    return this.state.users
      .sort((a, b) => (a.total_push_up_count < b.total_push_up_count ? 1 : -1))
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
            <td style={{ fontSize: '20px' }}>{user.total_push_up_count}</td>
          </tr>
        )
      })
  }

  render() {
    return (
      <div>
        <PushUpNav />
        <div class="container">
          <div className="row">
            <div className="col s4 m4 l4">
              <div className="card">
                <div class="card-image">
                  {this.state.users[1] && (
                    <img
                      className="activator"
                      src={this.state.users[1].img}
                      alt="user img"
                    />
                  )}
                </div>
                <div className="card-content">
                  <span
                    class="card-title activator grey-text text-darken-4"
                    style={{ fontWeight: 900 }}
                  >
                    2nd
                  </span>
                  {this.state.users[1] && (
                    <span class="card-title activator grey-text text-darken-4">
                      TOTAL:&nbsp;{this.state.users[1].total_push_up_count}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col s4 m4 l4">
              <div className="card">
                <div className="card-image">
                  {this.state.users[0] && (
                    <img
                      className="activator"
                      src={this.state.users[0].img}
                      alt="user img"
                    />
                  )}
                </div>
                <div className="card-content">
                  <span
                    className="card-title activator red-text text-darken-1"
                    style={{ fontWeight: 900 }}
                  >
                    1st
                  </span>
                  {this.state.users[0] && (
                    <span class="card-title activator grey-text text-darken-4">
                      TOTAL:&nbsp;{this.state.users[0].total_push_up_count}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col s4 m4 l4">
              <div className="card">
                <div className="card-image">
                  {this.state.users[2] && (
                    <img
                      className="activator"
                      src={this.state.users[2].img}
                      alt="user img"
                    />
                  )}
                </div>
                <div></div>
                <div className="card-content">
                  <span
                    className="card-title activator grey-text text-darken-4"
                    style={{ fontWeight: 900 }}
                  >
                    3rd
                  </span>
                  {this.state.users[2] && (
                    <span class="card-title activator grey-text text-darken-4">
                      TOTAL:&nbsp;{this.state.users[2].total_push_up_count}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
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

PushUpRanking.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { setCurrentUser })(PushUpRanking)
