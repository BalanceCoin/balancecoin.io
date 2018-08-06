import React, { Component } from 'react';

class Basics extends Component {
  render() {
    return (
      <div className="container-fluid blc-dark-page">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img src="images/network.png" alt="" className="blc-basics-network" />
          </div>
          <div className="col-md-5">
            <h1>技术参数</h1>
            <p>BLC 于 2018 年 1 月初对比特币网络成功进行了分叉，分叉高度为 503,200。</p>
            <div className="container-fluid blc-basics-params">
              <div className="row blc-basics-param-row">
                <div className="col-md-1">
                  <img src="images/icon-total.png" alt="" />
                </div>
                <div className="col-md-7">
                  <h2>货币总量</h2>
                </div>
                <div className="col-md-4">
                  <p>2,121 万</p>
                </div>
              </div>
              <div className="row blc-basics-param-row">
                <div className="col-md-1">
                  <img src="images/icon-fork.png" alt="" />
                </div>
                <div className="col-md-7">
                  <h2>分叉高度</h2>
                </div>
                <div className="col-md-4">
                  <p>503,200</p>
                </div>
              </div>
              <div className="row blc-basics-param-row">
                <div className="col-md-1">
                  <img src="images/icon-time.png" alt="" />
                </div>
                <div className="col-md-7">
                  <h2>出块时间</h2>
                </div>
                <div className="col-md-4">
                  <p>10 min</p>
                </div>
              </div>
              <div className="row blc-basics-param-row">
                <div className="col-md-1">
                  <img src="images/icon-size.png" alt="" />
                </div>
                <div className="col-md-7">
                  <h2>区块大小</h2>
                </div>
                <div className="col-md-4">
                  <p>1 MB</p>
                </div>
              </div>
              <div className="row blc-basics-param-row">
                <div className="col-md-1">
                  <img src="images/icon-protect.png" alt="" />
                </div>
                <div className="col-md-7">
                  <h2>重放攻击</h2>
                </div>
                <div className="col-md-4">
                  <p>双重保护</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Basics;
