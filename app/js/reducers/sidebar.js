import { TOGGLE_SIDEBAR } from '../constants/ActionType'

const initialState = {
  isMinify: true
}

export const sidebar = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, { isMinify: !state.isMinify })
    default:
      return state
  }
}
