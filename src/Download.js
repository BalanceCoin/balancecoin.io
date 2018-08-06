import React, { Component } from 'react';

class Download extends Component {
  render() {
    return (
      <div id="download" className="container-fluid blc-dark-page">
      <div className="container">
        <div className="row blc-block">
          <div className="col-md-12">
            <h1>下载</h1>
            <p>不管你是普通用户还是矿工，全节点钱包程序都是必须的。</p>
          </div>
        </div>
        <div className="row blc-download-req-row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <h2><img src="images/sys-windows.png" alt="" />Windows 系统需求</h2>
                <p>Windows 7 64-位操作系统<br />
                至少 2GB 内存<br />
                200GB 剩余硬盘空间<br />
                显示器至少支持 1024x768 分辨率</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <a download="win-blc-wallet.zip" href="downloads/win-blc-wallet.zip" className="blc-button-mid">下载 Win 钱包</a>
              </div>
              <div className="col-md-5">
                <a download="win-blc-mining-tools.zip" href="downloads/win-blc-mining-tools.zip" className="blc-button-mid-2">下载 Win 挖矿工具</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <h2><img src="images/sys-macos.png" alt="" />macOS 系统需求</h2>
                <p>macOS High Sierra 操作系统<br />
                至少 2GB 内存<br />
                200GB 剩余硬盘空间<br />
                显示器至少支持 1024x768 分辨率</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <a download="mac-blc-wallet.dmg" href="downloads/mac-blc-wallet.dmg" className="blc-button-mid">下载 Mac 钱包</a>
              </div>
              <div className="col-md-5">
                <a download="mac-blc-mining-tools.zip" href="downloads/mac-blc-mining-tools.zip" className="blc-button-mid-2">下载 Mac 挖矿工具</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Download;
