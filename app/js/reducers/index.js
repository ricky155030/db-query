import { combineReducers } from 'redux'
import { sql } from './sql'
import { query } from './query'
import { sidebar } from './sidebar'
import { template } from './template'

const RootReducer = combineReducers({
  sql,
  query,
  sidebar,
  template
})

export default RootReducer
