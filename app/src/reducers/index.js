import { combineReducers } from 'redux'

import {default as appReducer}     from './app'
import {default as spidersReducer} from './spiders'


export const reducers = combineReducers({
  app: appReducer,
  spiders: spidersReducer,
})
