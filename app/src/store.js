import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import * as types from './constants/ActionTypes'


export const reducer = (state = {
    mode: 0
  }, action) => {
  switch (action.type) {
    case types.SET_MODE: return { ...state, mode: action.mode }
    default: return state
  }
}

const middleware = applyMiddleware(
  createLogger(),
  routerMiddleware(),
  thunk
)

export const store = createStore(
  reducer,
  middleware
)
