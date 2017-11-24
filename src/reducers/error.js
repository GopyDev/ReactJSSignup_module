import { SHOW_LOG, VERIFY_EMAIL, VERIFY_PASSWORD, VERIFY_CONFIRM_PASSWORD, VERIFY_DATE_OF_BIRTH, VERIFY_GENDER, STORE_WHERE_DID_YOU_HEAR_ABOUT_US, DAY, MONTH, YEAR } from '../actions'
import leapYear from '../lib/leapYear'

const genders = ['male', 'female', 'unspecified']

const input = (state = {}, action) => {
  switch (action.type) {
    case VERIFY_EMAIL:
      return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(action.text) ?
        Object.assign({}, state, {email: {
          text: action.text,
          message: ''
        }}) :
        Object.assign({}, state, {email: {
          text: action.text,
          message: 'Invalid email'
        }})

    case VERIFY_PASSWORD:
      return /[0-9a-zA-Z]{6,}/.test(action.text) ?
        Object.assign({}, state, {password: {
          text: action.text,
          message: ''
        }}) :
        Object.assign({}, state, {password: {
          text: action.text,
          message: 'Invalid password, must be at least 6 characters longs'
        }})

    case VERIFY_CONFIRM_PASSWORD:
      return state.password.text === action.text ?
        Object.assign({}, state, {confirmPassword: {
          text: action.text,
          message: ''
        }}) :
        Object.assign({}, state, {confirmPassword: {
          text: action.text,
          message: 'Passwords do not match'
        }})

    case VERIFY_DATE_OF_BIRTH:
      if (action.title === DAY) {
        return action.text >= 1 && action.text <= 31 ?
          Object.assign({}, state, {day: {
            text: action.text,
            message: ''
          }}) :
          Object.assign({}, state, {day: {
            text: action.text,
            message: 'Invalid day'
          }})
      }
      else if (action.title === MONTH) {
        return action.text >= 1 && action.text <= 12 ?
          Object.assign({}, state, {month: {
            text: action.text,
            message: ''
          }}) :
          Object.assign({}, state, {month: {
            text: action.text,
            message: 'Invalid month'
          }})
      }
      else if (action.title === YEAR) {
        console.log(!leapYear(action.text) && state.month.text === "2");
        if (!leapYear(action.text) && state.month.text === "2") {
          return (state.day.text < 29) ?
            Object.assign({}, state, {year: {
              text: action.text,
              message: ''
            }}) :
            Object.assign({}, state, {year: {
              text: action.text,
              message: 'Not a leap year, invalid date'
            }})
        } else {
          return action.text > 0 ?
            Object.assign({}, state, {year: {
              text: action.text,
              message: ''
            }}) :
            Object.assign({}, state, {year: {
              text: action.text,
              message: 'Invalid year'
            }})
        }
      }
      break

    case VERIFY_GENDER:
      return genders.indexOf(action.text > -1) ?
        Object.assign({}, state, {gender: {
          text: action.text,
          message: ''
        }}) :
        Object.assign({}, state, {gender: {
          text: action.text,
          message: 'No gender spefied'
        }})

    case STORE_WHERE_DID_YOU_HEAR_ABOUT_US:
      return Object.assign({}, state, {whereDidUHear: {
        text: action.text,
        message: ''
      }})

    case SHOW_LOG:
      console.log(state)
      return state;

    default:
      return state
  }
}

export default input