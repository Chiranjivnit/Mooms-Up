import {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCESS,
    FETCH_REGISTER_FAILED
} from '../Constants/ActionTypes';
import axios from 'axios';

export const registerRequest = () => {
    return {
        type: FETCH_REGISTER_REQUEST
    }
}

export const registerSucess = (data) => {
    return {
        type: FETCH_REGISTER_SUCESS,
        data: data
    }
}

export const registerFailed = () => {
    return {
        type: FETCH_REGISTER_FAILED
    }
}

export const fetchRegister = (data) => {
    const { email, password, firstname, lastname } = data;
    console.log(data)
    return dispatch => {
        dispatch(registerRequest());
        axios.post('http://uat.momsup.com.ph/momsup-magento-core/rest/V1/integration/customer/token ',
            { firstname: firstname, lastname: lastname, email: email, password: password, })

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