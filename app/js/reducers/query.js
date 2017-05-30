import { 
  SET_QUERY_DB,
  SET_QUERY_SQL,
  SET_QUERY_RESULT
} from '../constants/ActionType'
import moment from 'moment'

const initialState = {
  db: [],
  query: '',
  result: [],
  time: null
}

export const query = (state = initialState, action) => {
  switch(action.type) {
    case SET_QUERY_DB:
      return Object.assign({}, state, { db: action.db })
    case SET_QUERY_SQL:
      return Object.assign({}, state, { 
        sql: action.sql,
        result: initialState.result
      })
    case SET_QUERY_RESULT:
      return Object.assign({}, state, { 
        result: action.result
      })
    default:
      return state
  }
}
