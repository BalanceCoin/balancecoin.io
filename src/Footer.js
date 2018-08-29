import React, { Component } from 'react'
import { connect } from 'react-redux'

class FooterSocialIcon extends Component {
  render() {
    const { imgsrc, target } = this.props
    return (
      <a href={target}>
        <img src={imgsrc} alt="" className="blc-social-icon-footer" />
      </a>
    )
  }
}

class Footer extends Component {
  render() {
    const localText = this.props.lang.topBanner
    const footerText = this.props.lang.footer
    return (
      <div id="contact" className="container-fluid blc-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <img
                  src="images/logo-footer.png"
                  alt=""
                  className="blc-footer-logo"
                />
              </div>
              <div className="row blc-copy-text">
                &copy; 2017-2018 BalanceCoin Team.
              </div>
              <div className="row">
                <FooterSocialIcon
                  imgsrc="images/facebook-footer.png"
                  target="https://www.facebook.com/BalanceCoin-203224773852402/"
                />
                <FooterSocialIcon
                  imgsrc="images/telegram-footer.png"
                  target="https://t.me/blcio"
                />
                <FooterSocialIcon
                  imgsrc="images/github-footer.png"
                  target="https://github.com/balancecoin"
                />
                <FooterSocialIcon
                  imgsrc="images/linkedin-footer.png"
                  target="https://www.linkedin.com/company/balance-coin"
                />
              </div>
            </div>
            <div className="col-md-3">
              <p>BalanceCoin.io</p>
              <ul>
                <li>
                  <a href="#home">{localText.menu.home}</a>
                </li>
                <li>
                  <a href="#whatisblc">{localText.menu.whatisblc}</a>
                </li>
                <li>
                  <a href="#mining">{localText.menu.mining}</a>
                </li>
                <li>
                  <a href="#milestone">{localText.menu.milestone}</a>
                </li>
                <li>
                  <a href="#team">{localText.menu.team}</a>
                </li>
                <li>
                  <a href="#contact">{localText.menu.contact}</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <p>{footerText.utilities.title}</p>
              <ul>
                <li>{footerText.utilities.explorer}</li>
                <li>{footerText.utilities.wallet}</li>
                <li>{footerText.utilities.pool}</li>
              </ul>
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

export default connect(mapStateToProps)(Footer)
