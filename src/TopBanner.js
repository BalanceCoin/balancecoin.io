import React, { Component } from 'react';

class TopBanner extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row blc-top-band navbar-fixed-top">
          <div className="col-md-2 blc-top-logo">
            <img src="images/top-logo.png" alt="" />
          </div>
          <div className="col-md-4 col-md-offset-4">
            <div className="blc-menu-group">
              <a href="#home">主页</a>
              <a href="#whatisblc">关于</a>
              <a href="#mining">挖矿</a>
              <a href="#milestone">里程碑</a>
              <a href="#team">团队</a>
              <a href="#contact">联系我们</a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="btn-group pull-right">
              <div className="blc-lang-pane">
                <span className="glyphicon glyphicon-globe" aria-hidden="true"></span><button type="button" className="btn btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">中文<span className="caret"></span></button>
                <ul className="dropdown-menu pull-right">
                  <li><a href="#english">English</a></li>
                  <li><a href="#chinese">中文</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBanner;
