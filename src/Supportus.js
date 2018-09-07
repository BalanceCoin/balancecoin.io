import React, { Component } from 'react'
import { connect } from 'react-redux'

class SupportUs extends Component {
  render() {
    const localText = this.props.supportUs
    return (
      <div className="container-fluid blc-support">
        <div className="container">
          <div className="row blc-block">
            <div className="col-md-5">
              <img src="images/nannan.png" alt="" className="blc-nannan" />
            </div>
            <div className="col-md-6 blc-support-text">
              <div className="container-fluid">
                <h1>{localText.title}</h1>
                <p>{localText.desc}</p>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <a href="#hello" className="blc-button-support">
                      <span className="glyphicon glyphicon-heart-empty" />
                      &nbsp; {localText.btns.joinus}
                    </a>
                  </div>
                  <div className="col-md-4 col-md-offset-1">
                    <a href="#world" className="blc-button-support">
                      <span className="glyphicon glyphicon-thumbs-up" />
                      &nbsp; {localText.btns.donate}
                    </a>
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
  return {
    ...state.lang
  }
}

export default connect(mapStateToProps)(SupportUs)
