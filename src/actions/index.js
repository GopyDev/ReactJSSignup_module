export const VERIFY_EMAIL = 'VERIFY_EMAIL'
export const VERIFY_PASSWORD = 'VERIFY_PASSWORD'
export const VERIFY_CONFIRM_PASSWORD = 'VERIFY_CONFIRM_PASSWORD'
export const VERIFY_DATE_OF_BIRTH = 'VERIFY_DATE_OF_BIRTH'
export const VERIFY_GENDER = 'VERIFY_GENDER'
export const STORE_WHERE_DID_YOU_HEAR_ABOUT_US = 'STORE_WHERE_DID_YOU_HEAR_ABOUT_US'
export const DAY = 'DAY'
export const MONTH = 'MONTH'
export const YEAR = 'YEAR'
export const SHOW_LOG = 'SHOW_LOG'

export const verifyEmail = (text) => ({
  type: VERIFY_EMAIL,
  text: text,
  completed: false
})

export const verifyPassword = (text) => ({
  type: VERIFY_PASSWORD,
  text: text,
  completed: false
})

export const verifyConfirmPassword = (text) => ({
  type: VERIFY_CONFIRM_PASSWORD,
  text: text,
  completed: false
})

export const verifyDateOfBirth = (text, type) => ({
  type: VERIFY_DATE_OF_BIRTH,
  text: text,
  title: type,
  completed: false
})

export const verifyGender = (text) => ({
  type: VERIFY_GENDER,
  text: text,
  completed: false
})

export const storeWhereDidUHearAboutUs = (text) => ({
  type: STORE_WHERE_DID_YOU_HEAR_ABOUT_US,
  text: text,
  completed: false
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const showLog = () => ({
  type: SHOW_LOG
})