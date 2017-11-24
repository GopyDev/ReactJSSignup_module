import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

let Header = ({ title }) => {
  return (
    <h3>
      {title}
    </h3>
  )
}

const mapStateToProps = state => ({
  title: state.visibilityFilter === 2 ? 'Thank you!' : 'Signup'
})

Header = connect(
  mapStateToProps
)(Header)

export default Header