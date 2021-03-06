import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types'
import firebase from 'firebase'

//Used when each time the user type in the email field
export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({ email, password },cb) => {
   return dispatch => {
    dispatch({ type: LOGIN_USER })
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user  => {
            loginUserSuccess(dispatch, user)
            cb()
        })
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess(dispatch, user))
                .catch(() => loginUserFail(dispatch))
        })
    }
}

const loginUserFail = dispatch => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
}

const loginUserSuccess = ( dispatch, user ) => {
    dispatch({
        type: LOGIN_USER_SUCCESS, 
        payload: user
    })
}