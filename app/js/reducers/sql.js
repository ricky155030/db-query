import { 
  RECEIVE_TEMPLATES,
  PUSH_HISTORY
} from '../constants/ActionType'
import moment from 'moment'

const initialState = {
  query: '',
  result: null,
  templates: [],
  history: []
}

export const sql = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TEMPLATES:
      return Object.assign({}, state, { templates: action.templates })
    case PUSH_HISTORY:
      return Object.assign({}, state, { 
        history: [
          ...state.history,
          { sql: action.sql,
            result: action.result,
            time: parseInt(moment().format('x')),
            db: action.db
          }
        ]
      })
    default:
      return state
  }
}
