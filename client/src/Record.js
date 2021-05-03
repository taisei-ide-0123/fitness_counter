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
        // this.setState({ records: response.data })
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // recordList() {
  //   return this.state.records.map((currentrecord) => {
  //     return <Record record={currentrecord} key={currentrecord._id} />
  //   })

  render() {
    return (
      <div>
        <Nav />
        <h3>Training Record</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Event</th>
              <th>Count</th>
              <th>Date</th>
            </tr>
          </thead>
          {/* <tbody>{this.recordList()}</tbody> */}
        </table>
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
