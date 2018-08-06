import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <div id="team" className="container-fluid blc-dark-page">
      <div className="container">
        <div className="row blc-block">
          <div className="col-md-12">
            <h1>社区和团队</h1>
            <p>BalanceCoin 团队创建于 2017 年 1 月份。</p>
            <p>BLC 的早期产品雏形是由一位来自美国的天才数学家与中国的电脑极客创造而成。他们热爱钻研，酷爱开源技术，是比特币的坚定信仰者。他们创造 BLC 只有一个单纯的理想和目标 - 希望通过 PoC 这种更节能更公平的共识机制还原中本聪人人可参与挖矿的初衷。</p>
            <p>基因决定命运，产品上线后，由于 BLC 基因中天然的技术极客气息以及平易近人（人人可参与）的气质自发地吸引了无数矿工相继上线挖矿，也吸引了很多志同道合的小伙伴一起公益性地来建设 BLC 的生态。他们来自世界上的很多国家：中国、马来西亚、加拿大、新加坡等，他们各自来自不同行业：软件开发、宏观经济、投资银行、市场营销、公益事业等；他们中有 70, 80 后的连续创业者和职业经理人，也有 90 后的大学生。即使他们的文化、专业、人生阶段各不相同，他们都深深地着迷于数字货币与区块链，同时都秉持着同一种信念：对于彻底去中心化所带来的公平公正的制度的执着推崇。</p>
            <p>在这样一个社区的呵护下，相信 BLC 会茁壮成长，为世界构建一个绿色节能、公平公正、安全稳定的区块链生态。</p>
          </div>
        </div>
        <div className="row blc-block">
          <h2 className="blc-block blc-team-head">项目发起人</h2>

          <div className="col-md-3 col-md-offset-2 text-center blc-team-col">
            <div className="row">
              <img src="images/cicily.png" alt="" />
            </div>
            <div className="row">
              <h2>周玺 Cicily
              <a tabIndex="0" className="btn btn-sx blc-team-detail" role="button" data-toggle="popover" data-trigger="focus" title="Cicily" data-content="DaoVentures 创始人，投资银行背景，曾主导或参与多个区块链项目的上市全流程，包括白皮书撰写、市场材料准备、投融资等；<br /><br />出生于上海，早年赴美留学与工作，坚定地希望通过区块链技术可以创建一个真正去中心化的良性生态；<br /><br />本科毕业于美国康乃尔大学地产金融系；<br /><br />负责 BLC 的商务拓展、运营策略、项目融资等。"><span className="glyphicon glyphicon-info-sign"></span></a>
              <br /><small>负责 BLC 商务合作、运营策略、项目融资等</small></h2>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 text-center blc-team-col">
            <div className="row">
              <img src="images/terry.png" alt="" />
            </div>
            <div className="row">
              <h2>唐立奇 Terry Tong
              <a tabIndex="0" className="btn btn-sx blc-team-detail" role="button" data-toggle="popover" data-trigger="focus" title="Terry Tong" data-content="曾就职于 Groupon China 和 Oak Investment Partners，在互联网领域有丰富的产品研发和运营经验。擅长前端开发，并对区块链技术有深入的了解。热爱加密货币和区块链，坚信这将是改变人类社会的基石；<br /><br />本科毕业于香港科技大学计算机系并于美国麻省理工 Sloan 获得 MBA；<br /><br />负责 BLC 的国内社区运营以及产品的用户体验。"><span className="glyphicon glyphicon-info-sign"></span></a>
              <br /><small>技术负责人，BLC 早期代码贡献者</small></h2>
            </div>
          </div>
        </div>

        <div className="row blc-block">
          <h2 className="blc-block blc-team-head">社区运营负责人</h2>

          <div className="row blc-block">

          <div className="col-md-3 col-md-offset-1 text-center blc-team-col">
            <div className="row">
              <img src="images/roald.png" alt="" />
            </div>
            <div className="row">
              <h2>Roald Munoz
              <a tabIndex="0" className="btn btn-sx blc-team-detail" role="button" data-toggle="popover" data-trigger="focus" title="Roald Munoz" data-content="国泰君安（中国前三大投行）的区块链研究中心负责人；数字货币项目的风险投资人，主要关注底层协议、数字身份、以及物联网硬件设施；<br /><br />出生于芝加哥，曾于美国空军情报分析处担任翻译，目前在上海生活，希望能帮助创建一个去中心化的经济系统；<br /><br />本科毕业于卡耐基梅隆的设计系，并于上海交通大学获得 MBA；<br /><br />负责 BLC 的海外社区运营以及海外商务拓展。"><span className="glyphicon glyphicon-info-sign"></span></a>
              <br /><small>海外市场负责人</small></h2>
            </div>
          </div>

          <div className="col-md-3 text-center blc-team-col">
            <div className="row">
              <img src="images/calvin.png" alt="" />
            </div>
            <div className="row">
              <h2>Calvin Poon
              <a tabIndex="0" className="btn btn-sx blc-team-detail" role="button" data-toggle="popover" data-trigger="focus" title="Calvin Poon" data-content="曾于国泰君安担任区块链研究生和 OKEX 交易所协助上币业务；<br /><br />热爱区块链，深信区块链有如当九十年代互联网对世界的重大影响跟改变；<br /><br />本科毕业于美国波士顿大学经济和国际关系；<br /><br />负责协作 BLC 北美市场的社区管理（主要为加拿大）"><span className="glyphicon glyphicon-info-sign"></span></a>
              <br /><small>加拿大社区运营经理</small></h2>
            </div>
          </div>

          <div className="col-md-3 text-center blc-team-col">
            <div className="row">
              <img src="images/james.png" alt="" />
            </div>
            <div className="row">
              <h2>康俊超 James Kang
              <a tabIndex="0" className="btn btn-sx blc-team-detail" role="button" data-toggle="popover" data-trigger="focus" title="James Kang" data-content="曾实习于国泰君安研究所新能源领域；<br /><br />参与多项项目研究并拥有丰富的研究经验，对区块链技术有着浓厚的兴趣；<br /><br />本科毕业于波士顿大学经济系辅修商业管理；<br /><br />负责协作 BLC 北美市场的社区管理（主要为美国）"><span className="glyphicon glyphicon-info-sign"></span></a>
              <br /><small>美国社区运营经理</small></h2>
            </div>
          </div>

          </div>

          <div className="row">

          <div className="col-md-3 col-md-offset-2 text-center blc-team-col">
            <div className="row">
              <img src="images/audrey.png" alt="" />
            </div>
            <div className="row">
              <h2>Audrey Chen
              <a tabIndex="0" className="btn btn-sx blc-team-detail" role="button" data-toggle="popover" data-trigger="focus" title="Audrey Chen" data-content="曾在硅谷知名的初创企业 Stroll Health 及 Thumbstack 担任产品经理和成长黑客；<br /><br />热衷于发展影响力投资和社会型企业，主要在食品及预防医疗领域；<br /><br />本科毕业于 Carleton 文理学院，曾创办 Carlhacks, 美国的一个黑客马拉松社区；<br /><br />负责协作 BLC 中国市场的社区管理。"><span className="glyphicon glyphicon-info-sign"></span></a>
              <br /><small>中国社区运营经理</small></h2>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 text-center blc-team-col">
            <div className="row">
              <img src="images/member-czf.png" alt="" />
            </div>
            <div className="row">
              <h2>成则丰
              <a tabIndex="0" className="btn btn-sx blc-team-detail" role="button" data-toggle="popover" data-trigger="focus" title="Audrey Chen" data-content="从公司高管到互联网领域创业者，12年互联⽹从业经验<br /><br />2012年接触比特币，比特币早期矿工，做过套利，熟悉区块链原理，对区块链领域有着丰富的经验和兴趣。坚信区块链技术可以让人类生活更美好<br /><br />对计算机硬件技术发展有很深的了解，自学计算机课程，生活中自信开朗，喜欢军事类新闻节目<br /><br />负责BLC中国市场的社区管理、运营推⼴等相关⼯作"><span className="glyphicon glyphicon-info-sign"></span></a>
              <br /><small>中国社区运营经理</small></h2>
            </div>
          </div>

          </div>

        </div>

        <div className="row blc-block">
          <h2 className="blc-block blc-team-head">顾问</h2>

          <div className="row">

          <div className="col-md-3 col-md-offset-1 text-center blc-team-col">
            <div className="row">
              <img src="images/billy.png" alt="" />
            </div>
            <div className="row">
              <h2>Billy Chan
              <a tabIndex="0" className="btn btn-sx blc-team-detail" role="button" data-toggle="popover" data-trigger="focus" title="Billy Chan" data-content="Billy 是 IT 行业的资深人士，在数字技术软件开发、咨询和销售领域从业超过 15 年。他曾主导了微软在中国东部地区的软件反盗版工作；<br /><br />自 2015 年起，他开始对区块链颇具热情，并且对利用区块链来重塑食品和饮料分销行业倍感兴奋，并创立 DropChain，一家区块链供应链应用型初创企业；<br /><br />加拿大籍的华人，于 2014 年来到上海生活及工作。"><span className="glyphicon glyphicon-info-sign"></span></a>
              <br /><small>技术顾问</small></h2>
            </div>
          </div>

          <div className="col-md-3 text-center blc-team-col">
            <div className="row">
              <img src="images/victor.png" alt="" />
            </div>
            <div className="row">
              <h2>Victor Lee
              <a tabIndex="0" className="btn btn-sx blc-team-detail" role="button" data-toggle="popover" data-trigger="focus" title="Victor Lee" data-content="Victor 是市场营销行业的资深专家，担任奥姆尼康 (Omnicom) 传媒集团中国前副董事，专注于媒体广告、移动战略和品牌创新；<br /><br />对数字货币和区块链导向的初创公司充满热情，是一位经验丰富的连续创业者，并担任几个早期阶段区块链初创公司的导师；<br /><br />出生于马来西亚，于 2014 年来到上海生活及工作。"><span className="glyphicon glyphicon-info-sign"></span></a>
              <br /><small>市场营销顾问</small></h2>
            </div>
          </div>

          <div className="col-md-3 text-center blc-team-col">
            <div className="row">
              <img src="images/sioksiok.png" alt="" />
            </div>
            <div className="row">
              <h2>Sioksiok Tan
              <a tabIndex="0" className="btn btn-sx blc-team-detail" role="button" data-toggle="popover" data-trigger="focus" title="Sioksiok Tan" data-content="Sioksiok 是一位资深记录片导演，曾担任 Discovery Asia 的监制，同时也是 Kinetic ONE 的创始人，一家拍摄年轻人、时尚和生活方式为主题的短视频平台，旗下拥有牛人库、优范儿、美丽极客三大独立频道；<br /><br />对区块链创业公司充满兴趣，并为 5 家以上的区块链创业公司成功制作视频并进行多渠道推广；<br /><br />出生于新加坡，于 2012 年移居北京生活及工作，经常往返于上海与北京两地。"><span className="glyphicon glyphicon-info-sign"></span></a>
              <br /><small>战略顾问</small></h2>
            </div>
          </div>

          </div>

        </div>

      </div>
      </div>
    );
  }
}

export default Team;
