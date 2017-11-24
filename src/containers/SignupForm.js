import { connect } from 'react-redux'
import { verifyEmail, verifyPassword, verifyConfirmPassword, verifyDateOfBirth, verifyGender, storeWhereDidUHearAboutUs, DAY, MONTH, YEAR, showLog } from '../actions'
import React from 'react'

const errorBlock = (message) => <span style={{color: 'red'}}>{message}</span>

let SignupForm = ({ dispatch, error, visibility }) => {
  let input

  return (
    <form>
      {visibility === 0 &&
        <div>
          {/* Email */}
          <label>{error.email.message ? errorBlock(error.email.message) : 'EMAIL'}</label>
          <br />
          <input type="text" value={error.email.text} onChange={e => dispatch(verifyEmail(e.target.value))} />
          <br />
          <br />

          {/* Password */}
          <label>{error.password.message ? errorBlock(error.password.message) : 'PASSWORD'}</label>
          <br />
          <input type="text" value={error.password.text} onChange={e => dispatch(verifyPassword(e.target.value))} />
          <br />
          <br />

          {/* Confirm Password */}
          <label>{error.confirmPassword.message ? errorBlock(error.confirmPassword.message) : 'CONFIRM PASSWORD'}</label>
          <br />
          <input type="text" value={error.confirmPassword.text} onChange={e => dispatch(verifyConfirmPassword(e.target.value))} />
          <br />
        </div>
      }

      {visibility === 1 &&
        <div>
          {/* Date of birth */}
          <label>{error.day.message || error.month.message || error.year.message ? errorBlock(`${error.day.message} ${error.month.message} ${error.year.message}`) : 'DATE OF BIRTH'}</label>
          <br />
          <input type="number" value={error.day.text} onChange={e => dispatch(verifyDateOfBirth(e.target.value, DAY))} />
          <input type="number" value={error.month.text} onChange={e => dispatch(verifyDateOfBirth(e.target.value, MONTH))} />
          <input type="number" value={error.year.text} onChange={e => dispatch(verifyDateOfBirth(e.target.value, YEAR))} />
          <br />

          {/* Gender */}
          <label>{error.gender.message ? errorBlock(error.gender.message) : 'GENDER'}</label>
          <br />
          <input type="radio" selected={error.gender.text === 'male'} name="gender" value="male" onChange={e => dispatch(verifyGender(e.target.value))} /> Male
          <input type="radio" selected={error.gender.text === 'female'} name="gender" value="female" onChange={e => dispatch(verifyGender(e.target.value))} /> Female
          <input type="radio" selected={error.gender.text === 'unspecified'} name="gender" value="unspecified" onChange={e => dispatch(verifyGender(e.target.value))} /> Unspecified
          <br />

          {/* Where did you hear about us */}
          <label>WHERE DID YOU HEAR YOUT HEAR ABOUT US</label>
          <br />
          <select value={error.whereDidUHear.text === 'google'} onChange={e => dispatch(storeWhereDidUHearAboutUs(e.target.value))}>
            <option value="google">Google</option>
            <option value="friend">Friend</option>
          </select>
          <br />
        </div>
      }

      {visibility === 2 &&
        <div>
          <p>Thank you</p>
          <button onClick={e => {
            e.preventDefault();
            dispatch(showLog());
          }}>Go to dashboard</button>
        </div>
      }
    </form>
  )
}

const mapStateToProps = state => ({
  error: state.input,
  visibility: state.visibilityFilter
})

SignupForm = connect(
  mapStateToProps
)(SignupForm)

export default SignupForm