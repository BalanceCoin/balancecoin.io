import React, { Component } from 'react'
import { connect } from 'react-redux'

class Mining extends Component {
  render() {
    const domainName = 'https://download.balancecoin.io'
    const localText = this.props.lang.mining
    return (
      <div id="mining" className="container blc-page">
        <div className="row blc-block">
          <div className="col-md-10">
            <h1>{localText.title}</h1>
            <p>{localText.desc}</p>
            <div className="row">
              <div className="col-md-3">
                <a
                  download="HowToMine-cn.pdf"
                  href={domainName + '/HowToMine-cn.pdf'}
                  className="blc-button-mid-2"
                >
                  <span className="glyphicon glyphicon-question-sign" />
                  &nbsp;
                  {localText.downloadMiningGuide}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row blc-mining-step-row">
          <div className="col-md-4">
            <div className="container-fluid">
              <div className="row text-center">
                <img src="images/step-wallet.png" alt="" />
              </div>
              <div className="row text-center blc-mining-step-col">
                <h2>{localText.step1.title}</h2>
                <p>{localText.step1.desc}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container-fluid">
              <div className="row text-center">
                <img src="images/step-plotting.png" alt="" />
              </div>
              <div className="row text-center blc-mining-step-col">
                <h2>{localText.step2.title}</h2>
                <p>{localText.step2.desc}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container-fluid">
              <div className="row text-center">
                <img src="images/step-mining.png" alt="" />
              </div>
              <div className="row text-center blc-mining-step-col">
                <h2>{localText.step3.title}</h2>
                <p>{localText.step3.desc}</p>
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

export default connect(mapStateToProps)(Mining)
