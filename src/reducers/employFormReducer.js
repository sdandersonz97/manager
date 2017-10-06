import { EMPLOYEE_UPDATE } from '../actions/types'

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
}

export default (state=INITIAL_STATE, action) => {
    const { payload } = action
    switch (action.type) {
        case EMPLOYEE_UPDATE: 
            return { ...state, [payload.prop]: payload.value }
        default: 
            return state
    }
}