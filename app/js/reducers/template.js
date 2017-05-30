import { 
  SET_CREATE_SQL,
  SET_CREATE_NAME,
  SET_CREATE_DESCRIPTION,
  RESET_CREATE_DATA
} from '../constants/ActionType'

const initialState = {
  templates: [],
  create: {
    sql: '',
    name: '',
    description: ''
  }
}

export const template = (state = initialState, action) => {
  switch(action.type) {
    case SET_CREATE_SQL:
      return {
        ...state,
        create: {
          ...state.create,
          sql: action.sql
        }
      }
    case SET_CREATE_NAME:
      return {
        ...state,
        create: {
          ...state.create,
          name: action.name
        }
      }
    case SET_CREATE_DESCRIPTION:
      return {
        ...state,
        create: {
          ...state.create,
          description: action.description
        }
      }
    case RESET_CREATE_DATA:
      return {
        ...state,
        create: initialState.create
      }
    default:
      return state
  }
}
