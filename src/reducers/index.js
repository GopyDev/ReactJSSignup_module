import { combineReducers } from 'redux'
import input from './error'
import visibilityFilter from './visibilityFilter'

const reducer = combineReducers({
  input,
  visibilityFilter
})

export default reducer