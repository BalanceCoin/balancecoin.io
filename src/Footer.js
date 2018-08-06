import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="contact" className="container-fluid blc-footer blc-page">
      <div className="container">
        <div className="row text-center">
            <h2>联系我们 <br />
              <small>
                <span className="glyphicon glyphicon-envelope"></span>&nbsp;<a href="mailto:info@balancecoin.io">info@balancecoin.io</a>
              </small><br /><br />
            <p>微信矿工互助群</p>
            <img src="images/wechat-group.png" alt="" width="200px" height="200px" /><br />
            </h2>BalanceCoin.io<br />&copy; 2018
        </div>
      </div>
      </div>
    );
  }
}

export default Footer;
