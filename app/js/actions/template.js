import { 
  SET_CREATE_SQL,
  SET_CREATE_NAME,
  SET_CREATE_DESCRIPTION,
  RESET_CREATE_DATA
} from '../constants/ActionType'


export const setCreateName = name => ({
  type: SET_CREATE_NAME,
  name
})

export const setCreateSQL = sql => ({
  type: SET_CREATE_SQL,
  sql
})

export const setCreateDescription = description => ({
  type: SET_CREATE_DESCRIPTION,
  description
})

export const resetCreateData = description => ({
  type: RESET_CREATE_DATA
})
