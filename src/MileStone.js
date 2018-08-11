import React, { Component } from 'react'
import { connect } from 'react-redux'

class MileStone extends Component {
  render() {
    const localText = this.props.lang.milestone
    return (
      <div id="milestone" className="container blc-page">
        <div className="row">
          <div className="col-md-12 blc-block">
            <h1>{localText.title}</h1>
            <p>{localText.desc}</p>
          </div>
          <div className="col-md-12 blc-milestone-graph-col">
            <img src="images/milestone.png" alt="" />
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

export default connect(mapStateToProps)(MileStone)
