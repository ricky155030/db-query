import { SET_CREATE_QUERY } from '../constants/ActionType'

const initialState = {
  query: ''
}

export const sql = (state = initialState, action) => {
  switch(action.type) {
    case SET_CREATE_QUERY:
      return Object.assign({}, state, { query: action.query })
    default:
      return state
  }
}
