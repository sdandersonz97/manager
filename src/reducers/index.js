import { combineReducers } from 'redux'
import auth from './authReducer'
import employForm from './employFormReducer'
import employees from './employeesReducer'
export default combineReducers({
    auth,
    employForm,
    employees
})