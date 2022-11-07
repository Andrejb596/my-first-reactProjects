import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Test_1 from '../components/Page_11/Test_1'
import './SCSS/page_11.scss'

const defaultState = {
  cash: 0
}

// action = {type: '', payload: ''}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload }
    case 'GET_CASH':
      return { ...state, cash: state.cash - action.payload }
    case 'GET_CLEAR':
      return { cash: state.cash = 0 }
    default:
      return state
  }
}

const store = createStore(reducer);

export default function Page_11() {
  return (
    <Provider store={store}>
      <div className='page11'>
        <Test_1/>
      </div>
    </Provider>
  )
}
