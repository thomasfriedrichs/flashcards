import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'

function Header(props) {
  return (
    <div className='header-wrapper'>
      <h1>{props.title}</h1>
    </div>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
