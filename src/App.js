import React, { Component } from 'react'

import TopBanner from './TopBanner'
import LandingPage from './LandingPage'
import WhatisBLC from './WhatisBLC'
import PoCHistory from './PoCHistory'
import Basics from './Basics'
import Mining from './Mining'
import Download from './Download'
import MileStone from './MileStone'
import Team from './Team'
import SupportUs from './Supportus'
import ContactUs from './ContactUs'
import Footer from './Footer'
import './balancecoin.scss'

class App extends Component {
  render() {
    return (
      <div>
        <TopBanner />
        <LandingPage />
        <WhatisBLC />
        <PoCHistory />
        <Basics />
        <Mining />
        <Download />
        <MileStone />
        <Team />
        <SupportUs />
        <ContactUs />
        <Footer />
      </div>
    )
  }
}

export default App
