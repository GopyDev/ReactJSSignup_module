import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

let Footer = ({ back, error, index, dispatch }) => {
  return (
    <div>
      <br />
      <br />
      {back &&
        <a href="#" onClick={e => {
          e.preventDefault();
          dispatch(setVisibilityFilter(--index))
        }}>Back</a>
      }
      &nbsp;
      &nbsp;

      {!error && index !== 2 &&
        <a href="#" onClick={e => {
          e.preventDefault();
          dispatch(setVisibilityFilter(++index))
        }}>NEXT</a>
      }
    </div>
  )
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    error: Object.values(state.input).filter(function (input) {
      return input.message !== '';
    }).length > 0 || !(Object.values(state.input).filter(input => input.text !== '').length === 3 ||
      Object.values(state.input).filter(input => input.text !== '').length === 7 ||
      Object.values(state.input).filter(input => input.text !== '').length === 8
    ),
    back: parseInt(state.visibilityFilter, 10) > 0,
    index: parseInt(state.visibilityFilter, 10)
  };
}

Footer = connect(
  mapStateToProps
)(Footer)

export default Footer