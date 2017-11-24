// import { BACK } from '../filters'

const visibilityFilter = (state = 0, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter