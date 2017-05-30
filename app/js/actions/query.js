import { 
  SET_QUERY_DB,
  SET_QUERY_SQL,
  SET_QUERY_RESULT
} from '../constants/ActionType'

export const setQueryDB = db => ({
  type: SET_QUERY_DB,
  db
})

export const setQuerySQL = sql => ({
  type: SET_QUERY_SQL,
  sql
})

export const setQueryResult = result => ({
  type: SET_QUERY_RESULT,
  result
})
