import React, { Component } from 'react'
import { connect } from 'react-redux'

class LandingPage extends Component {
  render() {
    const localText = this.props.lang.landingPage
    return (
      <div id="home" className="container blc-page">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center blc-landing-pane">
            <p>
              <span className="blc-landing-title">BALANCE</span>
              &nbsp;
              <span className="blc-landing-title-coin">coin</span>
            </p>
            <p className="blc-landing-desc">
              {localText.desc1}
              <br />
              {localText.desc2}
              <br />
              {localText.desc3}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4 text-center blc-landing-social-pane">
            <a href="https://www.facebook.com/BalanceCoin-203224773852402/">
              <img src="images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://t.me/blcio">
              <img src="images/telegram.png" alt="Telegram" />
            </a>
            <a href="https://github.com/balancecoin">
              <img src="images/github.png" alt="Github" />
            </a>
            <a href="https://www.linkedin.com/company/balance-coin">
              <img src="images/linkedin.png" alt="Linkedin" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <a href="#download" className="blc-button">
              <span className="glyphicon glyphicon-download-alt" />
              &nbsp;&nbsp;
              {localText.downloadWalletBtn}
            </a>
            <a href="#download" className="blc-button-2">
              <span className="glyphicon glyphicon glyphicon-hdd" />
              &nbsp;&nbsp;
              {localText.downloadMinerBtn}
            </a>
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

export default connect(mapStateToProps)(LandingPage)
