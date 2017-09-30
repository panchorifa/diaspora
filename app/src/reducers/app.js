import * as types from '../constants/ActionTypes'

export default (state = {
    mode: 'list'
  }, action) => {
  switch (action.type) {
    case types.SET_MODE: return { ...state, mode: action.mode }
    default: return state
  }
}
