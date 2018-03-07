import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import combinedReducer from './reducers/combinedReducer'

const store = createStore(combinedReducer)

const render = () => {
  console.log(store)
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'))
}

render()
store.subscribe(render)