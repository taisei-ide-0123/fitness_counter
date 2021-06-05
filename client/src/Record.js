import React, { Component } from 'react'
import axios from 'axios'
import RecordNav from './components/Nav/RecordNav'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentUser } from './actions/authActions'

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
          <div className="card">
            <table
              className="table highlight centered"
              style={{ marginTop: '50px' }}
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
