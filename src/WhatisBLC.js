import React, { Component } from 'react'
import { connect } from 'react-redux'

class WhatisBLC extends Component {
  render() {
    const localText = this.props.lang.whatIsBLC
    return (
      <div id="whatisblc" className="container-fluid blc-dark-page">
        <div className="container">
          <div className="row blc-block">
            <div className="col-md-12">
              <h1>{localText.title}</h1>
              <p>{localText.desc1}</p>
              <p>{localText.desc2}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 blc-what-pane">
              <h2>
                <img src="images/green.png" alt="" className="blc-what-icon" />
                {localText.spot1.title}
              </h2>
              <p>{localText.spot1.desc}</p>
            </div>
            <div className="col-md-4 blc-what-pane">
              <h2>
                <img
                  src="images/balance.png"
                  alt=""
                  className="blc-what-icon"
                />
                {localText.spot2.title}
              </h2>
              <p>{localText.spot2.desc}</p>
            </div>
            <div className="col-md-4 blc-what-pane">
              <h2>
                <img src="images/safe.png" alt="" className="blc-what-icon" />
                {localText.spot3.title}
              </h2>
              <p>{localText.spot3.desc}</p>
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

export default connect(mapStateToProps)(WhatisBLC)
