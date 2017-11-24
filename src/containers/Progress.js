import { connect } from 'react-redux'
import React from 'react'

let Progress = ({ width }) => {
  return (
    <div style={{
      width: width,
      height: '8px',
      background: 'blue',
      margin: '0 auto'
    }}>

    </div>
  )
}

const mapStateToProps = state => ({
  width: (1 + state.visibilityFilter) * 33.33 + 30 + 'px'
})

Progress = connect(
  mapStateToProps
)(Progress)

export default Progress