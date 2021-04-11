import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

// authReducerとerrorReducerを1つに結合する。
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
})
