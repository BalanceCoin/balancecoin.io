import React, { Component } from 'react';

class WhatisBLC extends Component {
  render() {
    return (
      <div id="whatisblc" className="container-fluid blc-dark-page">
        <div className="container">
          <div className="row blc-block">
            <div className="col-md-12">
            <h1>什么是 BalanceCoin?</h1>
            <p>BalanceCoin 简称 BLC，⼀个基于全新共识机制的绿⾊节能、易⽤且公平公正的去中⼼化加密数字货币，也是世界上第⼀个基于 PoC (Proof Of Capacity) 共识机制的⽐特币分叉币。</p>
            <p>项目之所以命名为 BalanceCoin，一来是为了说明 PoC 的共识机制是 PoW 与 PoS 的优点的结合--既保留挖矿的元素，确保安全和公平性，又不大量耗费资源。二来是我们坚信宇宙需要达到一种平衡才能让万物生长，繁衍生息，正如我们对这个币未来想构建的生态的期许。</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 blc-what-pane">
              <h1><img src="images/green.png" alt="" className="blc-what-icon" />绿色节能</h1>
              <p>使⽤ PoC 共识机制的 BLC 不再需要耗费高额的电量，算⼒被重新定义为容量⽽不是计算速度。</p>
            </div>
            <div className="col-md-4 blc-what-pane">
              <h1><img src="images/balance.png" alt="" className="blc-what-icon" />公平公正</h1>
              <p>没有了⼤量的电⼒损耗，每个人都能参与挖矿并且从中获得相应比例的回报。</p>
            </div>
            <div className="col-md-4 blc-what-pane">
              <h1><img src="images/safe.png" alt="" className="blc-what-icon" />安全稳定</h1>
              <p>去中⼼化的节点分布在世界各地，加上 PoC 共识机制本身去 ASIC 的特点，BLC 网络无法出现算力垄断的情况，安全性得到很好的保障。</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatisBLC;
