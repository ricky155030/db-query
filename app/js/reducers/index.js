import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { sidebar } from './sidebar'
import { sql } from './sql'

const RootReducer = combineReducers({
  sql,
  sidebar,
  routing: routerReducer
})

export default RootReducer
