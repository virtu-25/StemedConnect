import React from 'react'

import PropTypes from 'prop-types'

import './secondary-button.css'

const SecondaryButton = (props) => {
  return (
    <div className="secondary-button-container">
      <button
        type="submit"
        className="secondary-button-button button ButtonSmall"
      >
        {props.button}
      </button>
    </div>
  )
}

SecondaryButton.defaultProps = {
  button: 'Button',
}

SecondaryButton.propTypes = {
  button: PropTypes.string,
}

export default SecondaryButton
