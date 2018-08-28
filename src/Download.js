import React, { Component } from 'react'
import { connect } from 'react-redux'

class Download extends Component {
  render() {
    const domainName = 'https://download.balancecoin.io'
    const localText = this.props.lang.download
    return (
      <div id="download" className="container-fluid blc-dark-page">
        <div className="container">
          <div className="row blc-block">
            <div className="col-md-12">
              <h1>{localText.title}</h1>
              <p>{localText.desc}</p>
            </div>
          </div>
          <div className="row blc-download-req-row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h2>
                    <img src="images/sys-windows.png" alt="" />
                    {localText.windows.req.title}
                  </h2>
                  <p>
                    {localText.windows.req.req1}
                    <br />
                    {localText.windows.req.req2}
                    <br />
                    {localText.windows.req.req3}
                    <br />
                    {localText.windows.req.req4}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <a
                    download="win-blc-wallet.zip"
                    href={ domainName + "/win-blc-wallet.zip" }
                    className="blc-button-mid"
                  >
                    {localText.windows.downloadWallet}
                  </a>
                </div>
                <div className="col-md-5">
                  <a
                    download="win-blc-mining-tools.zip"
                    href={ domainName + "/win-blc-mining-tools.zip" }
                    className="blc-button-mid-2"
                  >
                    {localText.windows.downloadMiningTools}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h2>
                    <img src="images/sys-macos.png" alt="" />
                    {localText.macos.req.title}
                  </h2>
                  <p>
                    {localText.macos.req.req1}
                    <br />
                    {localText.macos.req.req2}
                    <br />
                    {localText.macos.req.req3}
                    <br />
                    {localText.macos.req.req4}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <a
                    download="mac-blc-wallet.dmg"
                    href={ domainName + "/mac-blc-wallet.dmg" }
                    className="blc-button-mid"
                  >
                    {localText.macos.downloadWallet}
                  </a>
                </div>
                <div className="col-md-5">
                  <a
                    download="mac-blc-mining-tools.zip"
                    href={ domainName + "/mac-blc-mining-tools.zip" }
                    className="blc-button-mid-2"
                  >
                    {localText.macos.downloadMiningTools}
                  </a>
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
  const { lang } = state
  return {
    lang
  }
}

export default connect(mapStateToProps)(Download)
