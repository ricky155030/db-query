import { 
  SET_QUERY_RESULT,
  RECEIVE_TEMPLATES,
  PUSH_HISTORY
} from '../constants/ActionType'
import moment from 'moment'

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

export const requestSQLResult = (sql, db) => dispatch => {
  const result = db.map(d => ({
    db: d,
    result: `This is query result for ${sql}`,
    time: parseInt(moment().format('x'))
  }))

  dispatch(receiveQueryResult(result))
  dispatch(pushHistory(sql, db, result))
}

const receiveTemplates = templates => ({
  type: RECEIVE_TEMPLATES,
  templates
})

const receiveQueryResult = result => ({
  type: SET_QUERY_RESULT,
  result,
})

const pushHistory = (sql, db, result) => ({
  type: PUSH_HISTORY,
  result,
  sql,
  db
})
