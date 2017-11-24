import React from 'react'
// import * as todoStyles from '../styles'

let i = 0;

const ErrorComponent = ({ errors }) => (
  <ul>
    {errors.map(error =>
      <div key={i++}>
        {error}
      </div>
    )}
  </ul>
)

export default ErrorComponent