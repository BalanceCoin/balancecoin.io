import React, { Component } from 'react'
import { connect } from 'react-redux'

class Footer extends Component {
  render() {
    const localText = this.props.lang.contactus
    return (
      <div id="contact" className="container-fluid blc-footer blc-page">
        <div className="container">
          <div className="row text-center">
            <h2>
              {localText.title} <br />
              <small>
                <span className="glyphicon glyphicon-envelope" />
                &nbsp;
                <a href="mailto:info@balancecoin.io">info@balancecoin.io</a>
              </small>
              <br />
              <br />
              <p>{localText.wechat.title}</p>
              <img
                src="images/wechat-group.png"
                alt=""
                width="200px"
                height="200px"
              />
              <br />
            </h2>
            BalanceCoin.io
            <br />
            &copy; 2018
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

export default connect(mapStateToProps)(Footer)
