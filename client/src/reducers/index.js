import { combineReducers } from 'redux'
import authReducer from './authReducers'
import errorReducer from './errorReducers'

// authReducerとerrorReducerを1つに結合する。
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
})
