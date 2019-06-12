import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILED
} from '../Constants/ActionTypes';

const initialState = {
    data: [],
    fetching: false,
    error: null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOGIN_REQUEST:
            return { ...state, fetching: true }
        case FETCH_LOGIN_SUCCESS:
            return { ...state, fetching: false, data: action.data }
        case FETCH_LOGIN_FAILED:
            return { ...state, fetching: false, error: action.error }
        default:
            return state
    }
}

export default loginReducer;