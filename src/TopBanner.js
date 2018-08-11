import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LangAction } from './LangConst'

class TopBanner extends Component {
  render() {
    const localText = this.props.lang.topBanner
    return (
      <div className="container-fluid">
        <div className="row blc-top-band navbar-fixed-top">
          <div className="col-md-2 blc-top-logo">
            <img src="images/top-logo.png" alt="" />
          </div>
          <div className="col-md-4 col-md-offset-4">
            <div className="blc-menu-group">
              <a href="#home">{ localText.menu.home }</a>
              <a href="#whatisblc">{ localText.menu.whatisblc }</a>
              <a href="#mining">{ localText.menu.mining }</a>
              <a href="#milestone">{ localText.menu.milestone }</a>
              <a href="#team">{ localText.menu.team }</a>
              <a href="#contact">{ localText.menu.contact }</a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="btn-group pull-right">
              <div className="blc-lang-pane">
                <span className="glyphicon glyphicon-globe" aria-hidden="true"></span><button type="button" className="btn btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{ localText.currLang }<span className="caret"></span></button>
                <ul className="dropdown-menu pull-right">
                  <li><a href="#english" onClick={ () => this.props.switchLang('EN') }>English</a></li>
                  <li><a href="#chinese" onClick={ () => this.props.switchLang('CN') }>中文</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { lang } = state;
  return {
    lang
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchLang: toLang => {
      dispatch({
        type: LangAction.SWITCH_LANGUAGE,
        toLang
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBanner)
