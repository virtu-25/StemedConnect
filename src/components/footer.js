import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">STEMED CONNECT</span>
          <span>Copyright © 2023 STEMED Connect by Shraaptesh Lokanda.</span>
        </div>
      </div>
      <img alt="image" src="/waves-white.svg" className="footer-image" />
    </footer>
  )
}

export default Footer
