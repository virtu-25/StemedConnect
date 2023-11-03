import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button.css'

const PrimaryPinkButton = (props) => {
  return (
    <div className="primary-pink-button-container">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSf1OqJz2fDWum4KQDOHPzCIDPG-ZaTrz0CrWBenxIbhLQOTVQ/viewform"
        target="_blank"
        rel="noreferrer noopener"
        className="primary-pink-button-link button ButtonSmall"
      >
        {props.butoon}
      </a>
    </div>
  )
}

PrimaryPinkButton.defaultProps = {
  butoon: 'Join Now',
}

PrimaryPinkButton.propTypes = {
  butoon: PropTypes.string,
}

export default PrimaryPinkButton
