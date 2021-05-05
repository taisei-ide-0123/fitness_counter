import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SquatIcon from '../icon/squat-icon.png'
import PushUpIcon from '../icon/push-up-icon.png'
import PullUpIcon from '../icon/pull-up-icon.png'
import ArmCurlIcon from '../icon/arm-curl-icon.png'
import DumbbellRaiseIcon from '../icon/dumbbell-raise-icon.png'

class RankingMenu extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper deep-orange lighten-1">
            <ul
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Link
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  listStyle: 'none',
                  fontSize: '20px',
                }}
                to="/squat-ranking"
              >
                <li>
                  <img
                    src={SquatIcon}
                    alt="squat icon"
                    className="responsive-img"
                    style={{ width: '30px', height: '30px' }}
                  />
                </li>
              </Link>
              <Link
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  listStyle: 'none',
                  fontSize: '20px',
                }}
                to="/push-up-ranking"
              >
                <li>
                  <img
                    src={PushUpIcon}
                    alt="push up icon"
                    className="responsive-img"
                    style={{ width: '30px', height: '30px' }}
                  />
                </li>
              </Link>
              <Link
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  listStyle: 'none',
                  fontSize: '20px',
                }}
                to="/pull-up-ranking"
              >
                <li>
                  <img
                    src={PullUpIcon}
                    alt="pull up icon"
                    className="responsive-img"
                    style={{ width: '30px', height: '30px' }}
                  />
                </li>
              </Link>
              <Link
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  listStyle: 'none',
                  fontSize: '20px',
                }}
                to="/arm-curl-ranking"
              >
                <li>
                  <img
                    src={ArmCurlIcon}
                    alt="arm curl icon"
                    className="responsive-img"
                    style={{ width: '30px', height: '30px' }}
                  />
                </li>
              </Link>
              <Link
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  listStyle: 'none',
                  fontSize: '20px',
                }}
                to="/dumbbell-raise-ranking"
              >
                <li>
                  <img
                    src={DumbbellRaiseIcon}
                    alt="dumbbell raise icon"
                    className="responsive-img"
                    style={{ width: '30px', height: '30px' }}
                  />
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default RankingMenu
