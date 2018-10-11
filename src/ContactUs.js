import React, { Component } from 'react'
import { connect } from 'react-redux'

class ContactUs extends Component {
  getWechatSection() {
    const wechat = this.props.contactus.wechat
    if (typeof wechat === 'undefined') {
      return null
    }
    return (
      <div>
        <div className="blc-block" />
        <h2 className="blc-subtitle">{wechat.title}</h2>
        <p>
          {wechat.part1[0]}
          <br />
          {wechat.part1[1]}
        </p>
        <p>
          {wechat.part2[0]}
          <br />
          {wechat.part2[1]}
        </p>
        <p>
          {wechat.mtitle}
          <a href="mailto:joinwechatgroup@balancecoin.io">
            joinwechatgroup@balancecoin.io
          </a>
        </p>
      </div>
    )
  }

  render() {
    const localText = this.props.contactus
    return (
      <div id="contact" className="container-fluid blc-page">
        <div className="container">
          <div className="row blc-block">
            <div className="col-md-12">
              <h1>{localText.title}</h1>
              <p>
                {localText.desc.brief}
                <br />
                {localText.desc.welcomejoin}
              </p>
              <div className="blc-block" />
              <h2 className="blc-subtitle">{localText.tech.title}</h2>
              <p>
                {localText.tech.l1}
                <br />
                {localText.tech.l2}
              </p>
              <p>
                {localText.tech.mtitle}
                <a href="mailto:tech@balancecoin.io">tech@balancecoin.io</a>
              </p>
              { this.getWechatSection() }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.lang
}

export default connect(mapStateToProps)(ContactUs)
