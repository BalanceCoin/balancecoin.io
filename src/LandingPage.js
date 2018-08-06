import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <div id="home" className="container blc-page">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center blc-landing-pane">
            <p><span className="blc-landing-title">BALANCE</span>&nbsp;<span className="blc-landing-title-coin">coin</span></p>
            <p className="blc-landing-desc">致力于打造世界上第一款绿色节能<br />且人人都能参与的 bitcoin 数字货币</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4 text-center blc-landing-social-pane">
            <a href="https://www.facebook.com/BalanceCoin-203224773852402/"><img src="images/facebook.png" alt="Facebook" /></a>
            <a href="https://t.me/blcio"><img src="images/telegram.png" alt="Telegram" /></a>
            <a href="https://github.com/balancecoin"><img src="images/github.png" alt="Github" /></a>
            <a href="https://www.linkedin.com/company/balance-coin"><img src="images/linkedin.png" alt="Linkedin" /></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <a href="#download" className="blc-button">下载钱包</a>
            <a href="#download" className="blc-button-2">下载挖矿程序</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
