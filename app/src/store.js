import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'
import {reducers} from './reducers'
import {epics} from './epics'

const epicMiddleware = createEpicMiddleware(epics)

const middleware = applyMiddleware(
  createLogger(),
  routerMiddleware(),
  epicMiddleware
)

export const store = createStore(
  reducers,
  middleware
)
