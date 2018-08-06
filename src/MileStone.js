import React, { Component } from 'react';

class MileStone extends Component {
  render() {
    return (
      <div id="milestone" className="container blc-page">
        <div className="row">
          <div className="col-md-12 blc-block">
            <h1>里程碑</h1>
            <p>BalanceCoin 项目创始团队于 2017 年 1 月开始关注 PoC 共识机制，9 月份决定启动项目。在过去的一年间，团队在产品研发、生态构建、和社区运营方面努力开展工作，获得了一定的行业认可。以下为 BalanceCoin 的项目进展总结和未来计划，欢迎 BLC 信仰者群策群力，一起构建 BLC 生态！</p>
          </div>
          <div className="col-md-12 blc-milestone-graph-col">
            <img src="images/milestone.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default MileStone;
