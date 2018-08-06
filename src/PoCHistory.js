import React, { Component } from 'react';

class PoCHistory extends Component {
  render() {
    return (
      <div className="container blc-page">
        <div className="row">
          <div className="col-md-5">
          <h1>PoC 的历史</h1>
          <p>在比特币诞生两、三年后，人们逐渐承认了比特币的价值。而随着比特币价值逐步提高后，专有的 ASIC 矿机出现了，普通的非专业用户再也无法加入到挖矿的行列中来。此时区块链社区迫切的需要一种新的共识机制能够将 PoW 这种极度耗电的算法替代掉，让比特币重新回到大众的手中。</p>
          </div>
          <div className="col-md-7">
          <img src="images/poc-history.png" alt="" className="blc-history" />
          </div>
        </div>
      </div>
    );
  }
}

export default PoCHistory;
