import { TOGGLE_SIDEBAR } from '../constants/ActionType'

const initialState = {
  isOpen: true
}

export const sidebar = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, { isOpen: !state.isOpen })
    default:
      return state
  }
}
