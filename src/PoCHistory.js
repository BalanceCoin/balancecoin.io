import React, { Component } from 'react'
import { connect } from 'react-redux'

class PoCHistory extends Component {
  render() {
    const localText = this.props.lang.PoCHistory
    return (
      <div className="container blc-page">
        <div className="row">
          <div className="col-md-5">
            <h1>{localText.title}</h1>
            <p>{localText.desc}</p>
          </div>
          <div className="col-md-7">
            <img src="images/poc-history.png" alt="" className="blc-history" />
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

export default connect(mapStateToProps)(PoCHistory)
