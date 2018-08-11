import React, { Component } from 'react'
import { connect } from 'react-redux'

class Basics extends Component {
  render() {
    const localText = this.props.lang.techParams
    return (
      <div className="container-fluid blc-dark-page">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <img
                src="images/network.png"
                alt=""
                className="blc-basics-network"
              />
            </div>
            <div className="col-md-5">
              <h1>{localText.title}</h1>
              <p>{localText.desc}</p>
              <div className="container-fluid blc-basics-params">
                <div className="row blc-basics-param-row">
                  <div className="col-md-1">
                    <img src="images/icon-total.png" alt="" />
                  </div>
                  <div className="col-md-7">
                    <h2>{localText.total.title}</h2>
                  </div>
                  <div className="col-md-4">
                    <p>{localText.total.desc}</p>
                  </div>
                </div>
                <div className="row blc-basics-param-row">
                  <div className="col-md-1">
                    <img src="images/icon-fork.png" alt="" />
                  </div>
                  <div className="col-md-7">
                    <h2>{localText.fork.title}</h2>
                  </div>
                  <div className="col-md-4">
                    <p>{localText.fork.desc}</p>
                  </div>
                </div>
                <div className="row blc-basics-param-row">
                  <div className="col-md-1">
                    <img src="images/icon-time.png" alt="" />
                  </div>
                  <div className="col-md-7">
                    <h2>{localText.time.title}</h2>
                  </div>
                  <div className="col-md-4">
                    <p>{localText.time.desc}</p>
                  </div>
                </div>
                <div className="row blc-basics-param-row">
                  <div className="col-md-1">
                    <img src="images/icon-size.png" alt="" />
                  </div>
                  <div className="col-md-7">
                    <h2>{localText.size.title}</h2>
                  </div>
                  <div className="col-md-4">
                    <p>{localText.size.desc}</p>
                  </div>
                </div>
                <div className="row blc-basics-param-row">
                  <div className="col-md-1">
                    <img src="images/icon-protect.png" alt="" />
                  </div>
                  <div className="col-md-7">
                    <h2>{localText.reply.title}</h2>
                  </div>
                  <div className="col-md-4">
                    <p>{localText.reply.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { lang } = state
  return {
    lang
  }
}

export default connect(mapStateToProps)(Basics)
