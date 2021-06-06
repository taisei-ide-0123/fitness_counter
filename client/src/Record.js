import React, { Component } from 'react'
import axios from 'axios'
import RecordNav from './components/Nav/RecordNav'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentUser } from './actions/authActions'
import SquatImg from './components/icon/squat-icon.png'
import PushUpImg from './components/icon/push-up-icon.png'
import PullUpImg from './components/icon/pull-up-icon.png'
import ArmCurlImg from './components/icon/arm-curl-icon.png'
import DumbbellRaiseImg from './components/icon/dumbbell-raise-icon.png'

class RecordList extends Component {
  constructor(props) {
    super(props)
    this.state = { records: [] }
  }

  componentDidMount() {
    axios
      .get('/api/counts/' + this.props.auth.user.id)
      .then((response) => {
        this.setState({ records: response.data })
        // console.log(response.data)
        // console.log(this.state.records)
      })
      .catch((error) => {
        console.log(error)
      })

    const { user } = this.props.auth
    axios
      .get('api/users/' + user.id)
      .then((response) => {
        // console.log(response.data)
        this.setState({
          user: response.data,
          name: response.data.name,
          email: response.data.email,
          birthday: response.data.birthday,
          img: response.data.img,
        })
        // console.log(this.state.user)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  recordList() {
    return this.state.records
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .map((currentrecord) => {
        return (
          <tr>
            <td>{currentrecord.event}</td>
            <td>{currentrecord.count}</td>
            <td>{currentrecord.date.substring(0, 10)}</td>
          </tr>
        )
      })
  }

  render() {
    return (
      <div>
        <RecordNav />
        <div className="container">
          <div className="row">
            {/* TOTAL SQUAT COUNT */}
            <div className="col s12 m6 l6">
              <div className="card">
                <div style={{ marginTop: '2rem' }} className="row">
                  <div
                    className="col s8 offset-s2"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        cursor: 'pointer',
                        marginTop: '20px',
                        marginBottom: '20px',
                      }}
                    >
                      <img
                        src={SquatImg}
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'acsolute',
                        }}
                        alt="profile img"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  {this.state.user && (
                    <p
                      class="card-title activator grey-text text-darken-4"
                      style={{ fontWeight: 500, fontSize: 50 }}
                    >
                      {this.state.user.total_squat_count}
                    </p>
                  )}
                  <p>Total</p>
                </div>
              </div>
            </div>
            {/* TOTAL PUSH UP COUNT */}
            <div className="col s6 m6 l6">
              <div className="card">
                <div style={{ marginTop: '2rem' }} className="row">
                  <div
                    className="col s8 offset-s2"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        cursor: 'pointer',
                        marginTop: '20px',
                        marginBottom: '20px',
                      }}
                    >
                      <img
                        src={PushUpImg}
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'acsolute',
                        }}
                        alt="profile img"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  {this.state.user && (
                    <p
                      class="card-title activator grey-text text-darken-4"
                      style={{ fontWeight: 500, fontSize: 50 }}
                    >
                      {this.state.user.total_push_up_count}
                    </p>
                  )}
                  <p>Total</p>
                </div>
              </div>
            </div>
            {/* TOTAL PULL UP COUNT */}
            <div className="col s6 m4 l4">
              <div className="card">
                <div style={{ marginTop: '1rem' }} className="row">
                  <div
                    className="col s8 offset-s2"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        cursor: 'pointer',
                        marginTop: '20px',
                        marginBottom: '20px',
                      }}
                    >
                      <img
                        src={PullUpImg}
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'acsolute',
                        }}
                        alt="profile img"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  {this.state.user && (
                    <p
                      class="card-title activator grey-text text-darken-4"
                      style={{ fontWeight: 500, fontSize: 50 }}
                    >
                      {this.state.user.total_pull_up_count}
                    </p>
                  )}
                  <p>Total</p>
                </div>
              </div>
            </div>
            {/* TOTAL ARM CURL COUNT */}
            <div className="col s6 m4 l4">
              <div className="card">
                <div style={{ marginTop: '1rem' }} className="row">
                  <div
                    className="col s8 offset-s2"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        cursor: 'pointer',
                        marginTop: '20px',
                        marginBottom: '20px',
                      }}
                    >
                      <img
                        src={ArmCurlImg}
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'acsolute',
                        }}
                        alt="profile img"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  {this.state.user && (
                    <p
                      class="card-title activator grey-text text-darken-4"
                      style={{ fontWeight: 500, fontSize: 50 }}
                    >
                      {this.state.user.total_arm_curl_count}
                    </p>
                  )}
                  <p>Total</p>
                </div>
              </div>
            </div>
            {/* TOTAL DUMBBELL RAISE COUNT */}
            <div className="col s6 m4 l4">
              <div className="card">
                <div style={{ marginTop: '1rem' }} className="row">
                  <div
                    className="col s8 offset-s2"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      className="card-image"
                      style={{
                        width: '70px',
                        height: '70px',
                        cursor: 'pointer',
                        marginTop: '20px',
                        marginBottom: '20px',
                      }}
                    >
                      <img
                        src={DumbbellRaiseImg}
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'acsolute',
                        }}
                        alt="profile img"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  {this.state.user && (
                    <p
                      class="card-title activator grey-text text-darken-4"
                      style={{ fontWeight: 500, fontSize: 50 }}
                    >
                      {this.state.user.total_dumbbell_raise_count}
                    </p>
                  )}
                  <p>Total</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Record */}
        <div className="container">
          <div className="card">
            <table
              className="table highlight centered"
              style={{ marginTop: '1rem' }}
            >
              <thead>
                <tr className="red darken-1">
                  <th>Event</th>
                  <th>Count</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>{this.recordList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

RecordList.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { setCurrentUser })(RecordList)
