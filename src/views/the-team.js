import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'
import './the-team.css'

const TheTeam = (props) => {
  return (
    <div className="the-team-container">
      <Helmet>
        <title>The-Team - STEMMED CONNECT</title>
        <meta property="og:title" content="The-Team - STEMMED CONNECT" />
      </Helmet>
      <Header></Header>
      <div className="the-team-container1">
        <div className="the-team-main">
          <div className="the-team-container2">
            <h1 className="the-team-text">Our Team</h1>
            <p className="the-team-text1">
              <span>
                We are always looking for passionate and dedicated volunteers to
                join our team. Whether you are a medical professional, educator,
                or community member, we are helping many achieve their mission.
              </span>
              <br></br>
            </p>
            <img alt="image" src="/team-1300w.png" className="the-team-image" />
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default TheTeam
