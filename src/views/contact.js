import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - STEMMED CONNECT</title>
        <meta property="og:title" content="Contact - STEMMED CONNECT" />
      </Helmet>
      <Header></Header>
      <div className="contact-container01">
        <div className="contact-main">
          <img
            alt="image"
            src="/craiyon_133600_man_doctor_in_futuristic_medicine_medical_concept-700w.png"
            className="contact-image"
          />
          <div className="contact-container02">
            <h1 className="contact-text">CONNECT With Us</h1>
            <h1 className="contact-text01">Talk with the team</h1>
            <p className="contact-text02 Lead">
              Ask us any questions you have!
            </p>
            <div className="contact-container03">
              <div>
                <form
                  action="https://formsubmit.co/slokanda25@gmail.com"
                  method="POST"
                  target="_blank"
                  enctype="application/x-www-form-urlencoded"
                  className="contact-form"
                >
                  <div>
                    <div>
                      <div>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Full Name"
                          className="contact-textinput input"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Email Address"
                          className="contact-textinput1 input"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows="10"
                      required
                      placeholder="Your Message"
                      className="contact-textarea textarea"
                    ></textarea>
                  </div>
                  <button type="submit" className="contact-button button">
                    Submit Form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-banner">
        <h2 className="contact-text03">
          <span>Email: Stemedconnect@gmail.com</span>
          <br></br>
          <br></br>
          <span>
            Instagram:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.instagram.com/stemed_connect/"
            target="_blank"
            rel="noreferrer noopener"
            className="contact-link"
          >
            stemed_connect
          </a>
          <br></br>
          <br></br>
          <span>
            TikTok:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.tiktok.com/@stemed_connect?_t=8fR9gJNGhaI&amp;_r=1"
            target="_blank"
            rel="noreferrer noopener"
            className="contact-link1"
          >
            stemed_connect
          </a>
          <br></br>
          <br className="contact-text12"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
        <img
          src="/60ed833f035dbe00046c24b6-200h.png"
          alt="image"
          className="contact-image1"
        />
        <img
          src="/symbol-tiktok-200h.png"
          alt="image"
          className="contact-image2"
        />
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default Contact
