import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class SupportUs extends Component {
  render() {
    const localText = this.props.supportUs
    return (
      <div className="container-fluid blc-support">
        <div className="container">
          <div className="row blc-block">
            <div className="col-md-6">
              <img src="images/nannan.png" alt="" className="blc-nannan" />
            </div>
            <div className="col-md-6 blc-support-text">
              <div className="container-fluid">
                <div className="row blc-support-block">
                  <div className="col-md-12">
                    <h1>{localText.title}</h1>
                    <p>{localText.desc}</p>
                    <p>
                      {localText.joinus.desc}
                      <a
                        href={ 'mailto:' + localText.joinus.email}
                        className="blc-hiring-email"
                      >
                        {localText.joinus.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <p>{localText.donate.desc}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <CopyToClipboard text={localText.donate.bitcoin.address}>
                      <a href="#hello" className="blc-button-support">
                        <span className="glyphicon glyphicon-btc" />
                        &nbsp; {localText.donate.bitcoin.title}
                      </a>
                    </CopyToClipboard>
                  </div>
                  <div className="col-md-4 col-md-offset-1">
                    <CopyToClipboard text={localText.donate.eth.address}>
                      <a href="#world" className="blc-button-support">
                        <span className="glyphicon glyphicon-btc" />
                        &nbsp; {localText.donate.eth.title}
                      </a>
                    </CopyToClipboard>
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
