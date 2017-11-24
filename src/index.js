import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import data from './data'
import SignupApp from './components/App.js'

const store = createStore(
  reducer,
  data,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <SignupApp />
  </Provider>,
  document.getElementById('root')
)