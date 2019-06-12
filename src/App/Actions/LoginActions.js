import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILED
} from '../Constants/ActionTypes'

import axios from 'axios';

export const loginRequest = () => {
    return {
        type: FETCH_LOGIN_REQUEST

    }
}
export const loginSucess = (data) => {
    return {
        type: FETCH_LOGIN_SUCCESS,
        data: data
    }
}
export const loginFailed = (error) => {
    return {
        type: FETCH_LOGIN_FAILED,
        error: error
    }
}



export const fetchLogin = (input) => {

    return dispatch => {
        dispatch(loginRequest());
        axios.post("http://dummy.restapiexample.com/api/v1/create",
            { name: "ummm", salary: "65757", age: "26" })
            .then(function (response) {
                dispatch(loginSucess(response.data));
                console.log(response);
            })
            .catch(function (error) {
                dispatch(loginFailed(error))
                console.log(error);
            });
    }
}