import { combineReducers } from 'redux'
import auth from './authReducer'
import employForm from './employFormReducer'

export default combineReducers({
    auth,
    employForm
})