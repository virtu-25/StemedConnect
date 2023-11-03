import React from 'react'

import PropTypes from 'prop-types'

import './list-item.css'

const ListItem = (props) => {
  return (
    <div className="list-item-container">
      <h5 className="list-item-text HeadingThree">{props.new_prop}</h5>
      <span>{props.description}</span>
    </div>
  )
}

ListItem.defaultProps = {
  description:
    'Our mentorship program provides students with the opportunity to gain valuable insights and guidance from experienced medical professionals. We match students with mentors based on their interests and aspirations, and provide ongoing support throughout the mentorship.',
  new_prop: 'Mentorship Program',
}

ListItem.propTypes = {
  description: PropTypes.string,
  new_prop: PropTypes.string,
}

export default ListItem
