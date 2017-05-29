import { 
  SET_CREATE_QUERY,
  RECEIVE_TEMPLATES,
  RECEIVE_SQL_RESULT,
  RESET_SQL_RESULT
} from '../constants/ActionType'

export const requestTemplates = () => dispatch => {
  const data = [
    {
      id: 1,
      name: 'TopCPU',
      author: 'HWKAO',
      label: ['CPU', 'Test'],
      description: 'Test SQL',
      query: 'SELECT * FROM V$SESSION'
    },
    {
      id: 2,
      name: 'TopMem',
      author: 'LINYJ',
      label: ['Memory', 'Test'],
      description: 'Test SQL',
      query: 'SELECT * FROM V$INSTANCE'
    }
  ]

  return dispatch(receiveTemplates(data))
}

export const requestSQLResult = sql => dispatch => {
  return dispatch(receiveSQLResult(sql))
}

export const setCreateQuery = query => ({
  type: SET_CREATE_QUERY,
  query
})

const receiveTemplates = templates => ({
  type: RECEIVE_TEMPLATES,
  templates
})

const receiveSQLResult = result => ({
  type: RECEIVE_SQL_RESULT,
  result
})

export const resetSQLResult = () => ({
  type: RESET_SQL_RESULT,
})
