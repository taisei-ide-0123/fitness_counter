import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../actions/authActions'

class Ranking extends Component {
  constructor(props) {
    super(props)
    this.state = { records: [] }
    this.state = { users: [] }
  }

  componentDidMount() {
    axios
      .get('/api/counts/squat/ranking')
      .then((response) => {
        this.setState({ records: response.data })
        const totalScoreList = this.state.records.map((record, i) => {
          return (
            <div>
              <div></div>
            </div>
          )
        })
        console.log(totalScoreList)
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    axios
      .get('/api/users')
      .then((response) => {
        this.setState({ users: response.data })
        // console.log(this.state.users)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  totalCount() {
    return this.state.records
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .map((totalrecord) => {
        return (
          <tr>
            <td>{totalrecord.event}</td>
            <td>{totalrecord.count}</td>
            <td>{totalrecord.date.substring(0, 10)}</td>
          </tr>
        )
      })
  }

  // rankingList() {
  //   console.log(this.state.records)
  //   if (this.state.records.user) {
  //   }
  //   //   return this.state.records
  //   //     .sort((a, b) => (a.date < b.date ? 1 : -1))
  //   //     .map((currentrecord) => {
  //   //       return (
  //   //         <tr>
  //   //           <td>{currentrecord.event}</td>
  //   //           <td>{currentrecord.count}</td>
  //   //           <td>{currentrecord.date.substring(0, 10)}</td>
  //   //         </tr>
  //   //       )
  //   //     })
  // }

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
                <th>User</th>
                <th>Count</th>
              </tr>
            </thead>
            {/* <tbody>{this.recordList()}</tbody> */}
          </table>
        </div>
      </div>
    )
  }
}

Ranking.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { setCurrentUser })(Ranking)
