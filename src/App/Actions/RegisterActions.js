import {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCESS,
    FETCH_REGISTER_FAILED
} from '../Constants/ActionTypes'
import axios from 'axios';

export const registerRequest = () => {
    return {
        type: FETCH_REGISTER_REQUEST
    }
}

export const registerSucess = () => {
    return {
        type: FETCH_REGISTER_SUCESS
    }
}

export const registerFailed = () => {
    return {
        type: FETCH_REGISTER_FAILED
    }
}

export const fetchRegister = () => {
    return dispatch => {
        (registerRequest());
        axios.post('http://dummy.restapiexample.com/api/v1/create',
            { name: "ummm", salary: "65757", age: "26" })
            .then((res) => {
                dispatch(registerSucess(res.data))
                console.log(res)
            })

            .catch((error) => {
                dispatch(registerFailed())
                console.log(error);
            })
    }
}