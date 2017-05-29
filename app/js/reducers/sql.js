import { 
  SET_CREATE_QUERY,
  RECEIVE_TEMPLATES,
  RECEIVE_SQL_RESULT,
  RESET_SQL_RESULT
} from '../constants/ActionType'

const initialState = {
  query: '',
  result: null,
  templates: []
}

export const sql = (state = initialState, action) => {
  switch(action.type) {
    case SET_CREATE_QUERY:
      return Object.assign({}, state, { query: action.query })
    case RECEIVE_TEMPLATES:
      return Object.assign({}, state, { templates: action.templates })
    case RECEIVE_SQL_RESULT:
      return Object.assign({}, state, { result: action.result })
    case RESET_SQL_RESULT:
      return Object.assign({}, state, { result: null })
    default:
      return state
  }
}
