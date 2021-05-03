import React, { Component } from 'react'
import axios from 'axios'
import Nav from './components/Nav'
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
        console.log(this.state.records)
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
        <Nav />
        <h3 className="bold" style={{ fontFamily: 'GillSans' }}>
          Training Record
        </h3>
        <div className="container">
          <table className="table highlight centered">
            <thead>
              <tr className="deep-orange lighten-1">
                <th>Event</th>
                <th>Count</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>{this.recordList()}</tbody>
          </table>
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
