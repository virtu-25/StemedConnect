import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card3.css'

const TestimonialCard3 = (props) => {
  return (
    <header
      className={`testimonial-card3-testimonial-card ${props.rootClassName} `}
    >
      <span>{props.text}</span>
    </header>
  )
}

TestimonialCard3.defaultProps = {
  rootClassName: '',
  text: 'Oliana Nika  President Raaga Suravarapu Secretary  Mana Barimani Finance Manager  Aaitijhyam Goswami Mentor  Nicole So TikTok Manager',
  quote:
    'Oliana Nika  President Raaga Suravarapu Secretary  Mana Barimani Finance Manager  Aaitijhyam Goswami Mentor  Nicole So TikTok Manager',
}

TestimonialCard3.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  quote: PropTypes.string,
}

export default TestimonialCard3
