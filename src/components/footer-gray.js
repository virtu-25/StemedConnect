import React from 'react'
import { Link } from 'react-router-dom'

import './footer-gray.css'

const FooterGray = (props) => {
  return (
    <footer className="footer-gray-footer">
      <div className="footer-gray-divider"></div>
      <div className="footer-gray-container">
        <div className="footer-gray-container1">
          <div className="footer-gray-container2">
            <span className="footer-gray-text">STEMED CONNECT</span>
          </div>
          <div className="footer-gray-container3">
            <div className="footer-gray-container4">
              <Link to="/" className="footer-gray-navlink">
                Home
              </Link>
              <Link to="/the-team" className="footer-gray-navlink1 Large">
                The Team
              </Link>
              <Link to="/contact" className="footer-gray-text01 Large">
                Contact
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf1OqJz2fDWum4KQDOHPzCIDPG-ZaTrz0CrWBenxIbhLQOTVQ/viewform"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-gray-text02 Large"
              >
                Join Us
              </a>
            </div>
            <div className="footer-gray-container5">
              <span className="footer-gray-text03 Large">Legal</span>
              <span className="footer-gray-text04 Large">
                Terms &amp; Conditions
              </span>
              <span className="footer-gray-text05 Large">Privacy Policy</span>
              <span className="footer-gray-text06 Large">Licenses (EULA)</span>
            </div>
          </div>
        </div>
        <span className="footer-gray-text07 Small">
          <span>
            All rights reserved. Copyright © 2023 STEMED CONNECT by
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="footer-gray-text09">Shraaptesh Lokanda</span>
          <span>.</span>
        </span>
      </div>
    </footer>
  )
}

export default FooterGray
