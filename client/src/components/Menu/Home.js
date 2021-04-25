import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import Nav from '../HomeNav'
import SQUAT from '../../Squat.jpg'
import PUSHUP from '../../PushUp.jpg'
import PULLUP from '../../PullUp.jpg'
import ARMCURL from '../../ArmCurl.jpg'
import DUMBBELLRAISE from '../../DumbbellRaise.jpg'

class Menu extends Component {
  onLogoutClick = (e) => {
    e.preventDefault()
    this.props.logoutUser()
  }

  render() {
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={SQUAT} alt="squat" />
                  <span class="card-title">SQUAT</span>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    <Link
                      to="/squat"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      SQUAT
                    </Link>
                    <i class="material-icons right">more_vert</i>
                  </span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    <Link
                      to="/squat"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      SQUAT
                    </Link>
                    <i class="material-icons right">close</i>
                  </span>
                  <p>
                    スクワットは筋トレの王様と言われており、1回のトレーニングで消費できるカロリーも多いです。
                    <br></br>
                    また、体全体をバランスよく鍛えられるので、筋肉を刺激できて基礎代謝も上がるというメリットがあります。
                    スクワットで鍛えられるお尻や太ももは特に大きな筋肉なので効率的に代謝アップの効果が見込めます。
                    他にも、女性の場合は冷え性などにも効果的です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={PUSHUP} alt="push up" />
                  <span class="card-title">PUSH UP</span>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    <Link
                      to="/push-up"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      PUSH UP
                    </Link>
                    <i class="material-icons right">more_vert</i>
                  </span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    <Link
                      to="/push-up"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      PUSH UP
                    </Link>
                    <i class="material-icons right">close</i>
                  </span>
                  <p>
                    腕立て伏せは、腕力や胸筋、体幹などの上半身全体の広範囲を鍛えることができます。
                    <br></br>
                    体幹以外にも胸や腕、肩など「見せる筋肉」を鍛えることができるので、目立つ部分を引き締めたい方にはオススメのトレーニングです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={PULLUP} alt="pull up" />
                  <span class="card-title">PULL UP</span>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    <Link
                      to="/pull-up"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      PULL UP
                    </Link>
                    <i class="material-icons right">more_vert</i>
                  </span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    <Link
                      to="/pull-up"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      PULL UP
                    </Link>
                    <i class="material-icons right">close</i>
                  </span>
                  <p>
                    懸垂は姿勢改善に効果的です。ぶら下がるだけでも体がまっすぐ伸びるのでそれだけでも姿勢矯正が期待できます。また、背中が大きくなることでウエストが細く見えるようになります。懸垂をして、かっこいい体を作りましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={ARMCURL} alt="arm curl" />
                  <span class="card-title">ARM CURL</span>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    <Link
                      to="/arm-curl"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      ARM CURL
                    </Link>
                    <i class="material-icons right">more_vert</i>
                  </span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    <Link
                      to="/arm-curl"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      ARM CURL
                    </Link>
                    <i class="material-icons right">close</i>
                  </span>
                  <p>
                    ダンベルやバーベルを両手に持ち、肘を曲げることによって腕を鍛えるトレーニングです。
                    <br></br>
                    主に力こぶができる部分である上腕二頭筋を鍛えることができます。
                    <br></br>
                    カッコ良くてたくましい腕を手に入れましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={DUMBBELLRAISE} alt="dumbbell raise" />
                  <span class="card-title">DUMBBELL RAISE</span>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    <Link
                      to="/dumbbell-raise"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      DUMBBELL RAISE
                    </Link>
                    <i class="material-icons right">more_vert</i>
                  </span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    <Link
                      to="/dumbbell-raise"
                      style={{ color: '#ff5722', textDecoration: 'none' }}
                    >
                      DUMBBELL RAISE
                    </Link>
                    <i class="material-icons right">close</i>
                  </span>
                  <p>
                    肩の筋肉は大きく前部・中部・後部に分けることができ、かなり大きな筋肉です。
                    <br></br>
                    肩を鍛えることで、ウエストが細く見えるようなVシェイプ、さらには小顔効果も期待できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Menu
