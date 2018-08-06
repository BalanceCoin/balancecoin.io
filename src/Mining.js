import React, { Component } from 'react';

class Mining extends Component {
  render() {
    return (
      <div id="mining" className="container blc-page">
        <div className="row blc-block">
          <div className="col-md-12">
            <h1>挖矿</h1>
            <p>简单三个步骤进入低功耗挖矿时代，获得电子货币。</p>
            <p><a download="HowToMine-cn.pdf" href="downloads/HowToMine-cn.pdf" className="blc-button-mid-2"><span className="glyphicon glyphicon-question-sign"></span>&nbsp;挖矿教程</a></p>
          </div>
        </div>
        <div className="row blc-mining-step-row">
          <div className="col-md-4">
            <div className="container-fluid">
              <div className="row text-center">
                <img src="images/step-wallet.png" alt="" />
              </div>
              <div className="row text-center blc-mining-step-col">
                <h2>第一步：下载钱包</h2>
                <p>下载全节点钱包，然后将账本数据通过 P2P 网络同步到本地</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container-fluid">
              <div className="row text-center">
                <img src="images/step-plotting.png" alt="" />
              </div>
              <div className="row text-center blc-mining-step-col">
                <h2>第二步：初始化硬盘</h2>
                <p>下载初始化程序，然后通过你的私人钱包地址初始你的硬盘</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container-fluid">
              <div className="row text-center">
                <img src="images/step-mining.png" alt="" />
              </div>
              <div className="row text-center blc-mining-step-col">
                <h2>第三步：开始挖矿</h2>
                <p>下载挖矿程序，使用初始化的数据并开始挖矿获得电子货币</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mining;
