import { combineReducers } from 'redux'
import { sidebar } from './sidebar'
import { sql } from './sql'

const RootReducer = combineReducers({
  sql,
  sidebar
})

export default RootReducer
