import React, { Component } from 'react'
import { connect } from 'react-redux'

class Team extends Component {
  render() {
    const localText = this.props.lang.team
    return (
      <div id="team" className="container-fluid blc-dark-page">
        <div className="container">
          <div className="row blc-block">
            <div className="col-md-12">
              <h1>{localText.title}</h1>
              <p>{localText.desc1}</p>
              <p>{localText.desc2}</p>
              <p>{localText.desc3}</p>
              <p>{localText.desc4}</p>
            </div>
          </div>
          <div className="row blc-block">
            <h2 className="blc-block blc-team-head">
              {localText.founders.title}
            </h2>

            <div className="col-md-3 col-md-offset-2 text-center blc-team-col">
              <div className="row">
                <img src="images/cicily.png" alt="" />
              </div>
              <div className="row">
                <h2>
                  {localText.cicily.title}
                  <a
                    tabIndex="0"
                    className="btn btn-sx blc-team-detail"
                    role="button"
                    data-toggle="popover"
                    data-trigger="focus"
                    title="Cicily"
                    data-content={localText.cicily.desc}
                  >
                    <span className="glyphicon glyphicon-info-sign" />
                  </a>
                  <br />
                  <small>{localText.cicily.jobdesc}</small>
                </h2>
              </div>
            </div>

            <div className="col-md-3 col-md-offset-1 text-center blc-team-col">
              <div className="row">
                <img src="images/terry.png" alt="" />
              </div>
              <div className="row">
                <h2>
                  {localText.terry.title}
                  <a
                    tabIndex="0"
                    className="btn btn-sx blc-team-detail"
                    role="button"
                    data-toggle="popover"
                    data-trigger="focus"
                    title="Terry Tong"
                    data-content={localText.terry.desc}
                  >
                    <span className="glyphicon glyphicon-info-sign" />
                  </a>
                  <br />
                  <small>{localText.terry.jobdesc}</small>
                </h2>
              </div>
            </div>
          </div>

          <div className="row blc-block">
            <h2 className="blc-block blc-team-head">
              {localText.socialOperation.title}
            </h2>

            <div className="row blc-block">
              <div className="col-md-3 text-center blc-team-col">
                <div className="row">
                  <img src="images/roald.png" alt="" />
                </div>
                <div className="row">
                  <h2>
                    {localText.roald.title}
                    <a
                      tabIndex="0"
                      className="btn btn-sx blc-team-detail"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Roald Munoz"
                      data-content={localText.roald.desc}
                    >
                      <span className="glyphicon glyphicon-info-sign" />
                    </a>
                    <br />
                    <small>{localText.roald.jobdesc}</small>
                  </h2>
                </div>
              </div>

              <div className="col-md-3 text-center blc-team-col">
                <div className="row">
                  <img src="images/calvin.png" alt="" />
                </div>
                <div className="row">
                  <h2>
                    {localText.calvin.title}
                    <a
                      tabIndex="0"
                      className="btn btn-sx blc-team-detail"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Calvin Poon"
                      data-content={localText.calvin.desc}
                    >
                      <span className="glyphicon glyphicon-info-sign" />
                    </a>
                    <br />
                    <small>{localText.calvin.jobdesc}</small>
                  </h2>
                </div>
              </div>

              <div className="col-md-3 text-center blc-team-col">
                <div className="row">
                  <img src="images/james.png" alt="" />
                </div>
                <div className="row">
                  <h2>
                    {localText.james.title}
                    <a
                      tabIndex="0"
                      className="btn btn-sx blc-team-detail"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="James Kang"
                      data-content={localText.james.desc}
                    >
                      <span className="glyphicon glyphicon-info-sign" />
                    </a>
                    <br />
                    <small>{localText.james.jobdesc}</small>
                  </h2>
                </div>
              </div>

              <div className="col-md-3 text-center blc-team-col">
                <div className="row">
                  <img src="images/audrey.png" alt="" />
                </div>
                <div className="row">
                  <h2>
                    {localText.audrey.title}
                    <a
                      tabIndex="0"
                      className="btn btn-sx blc-team-detail"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Audrey Chen"
                      data-content={localText.audrey.desc}
                    >
                      <span className="glyphicon glyphicon-info-sign" />
                    </a>
                    <br />
                    <small>{localText.audrey.jobdesc}</small>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row blc-block">
            <h2 className="blc-block blc-team-head">
              {localText.adviser.title}
            </h2>

            <div className="row">
              <div className="col-md-3 col-md-offset-1 text-center blc-team-col">
                <div className="row">
                  <img src="images/billy.png" alt="" />
                </div>
                <div className="row">
                  <h2>
                    {localText.billy.title}
                    <a
                      tabIndex="0"
                      className="btn btn-sx blc-team-detail"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Billy Chan"
                      data-content={localText.billy.desc}
                    >
                      <span className="glyphicon glyphicon-info-sign" />
                    </a>
                    <br />
                    <small>{localText.billy.jobdesc}</small>
                  </h2>
                </div>
              </div>

              <div className="col-md-3 text-center blc-team-col">
                <div className="row">
                  <img src="images/victor.png" alt="" />
                </div>
                <div className="row">
                  <h2>
                    {localText.victor.title}
                    <a
                      tabIndex="0"
                      className="btn btn-sx blc-team-detail"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Victor Lee"
                      data-content={localText.victor.desc}
                    >
                      <span className="glyphicon glyphicon-info-sign" />
                    </a>
                    <br />
                    <small>{localText.victor.jobdesc}</small>
                  </h2>
                </div>
              </div>

              <div className="col-md-3 text-center blc-team-col">
                <div className="row">
                  <img src="images/sioksiok.png" alt="" />
                </div>
                <div className="row">
                  <h2>
                    {localText.sioksiok.title}
                    <a
                      tabIndex="0"
                      className="btn btn-sx blc-team-detail"
                      role="button"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Sioksiok Tan"
                      data-content={localText.sioksiok.desc}
                    >
                      <span className="glyphicon glyphicon-info-sign" />
                    </a>
                    <br />
                    <small>{localText.sioksiok.jobdesc}</small>
                  </h2>
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

export default connect(mapStateToProps)(Team)
