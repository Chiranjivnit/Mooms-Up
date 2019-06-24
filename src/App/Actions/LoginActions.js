import axios from 'axios';
import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILED
} from '../Constants/ActionTypes'



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



export const fetchLogin = (payload) => {
    console.log(payload)
    const { username, password } = payload
    return dispatch => {
        dispatch(loginRequest());

        axios("http://uat.momsup.com.ph/momsup-magento-core/rest/V1/integration/customer/token", {
            method: 'POST',
            mode: 'no-cors',
            body: {
                username: username, password: password
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Authorization': `${token}` // After sucessful frtch then get token and token will be available
            },
            withCredentials: true,
            credentials: 'same-origin',
        }).then(response => {
            console.log(response)
        })
            .catch(function (error) {
                dispatch(loginFailed(error))
                console.log(error);
            })

        // axios.post("http://uat.momsup.com.ph/momsup-magento-core/rest/V1/integration/customer/token",
        //     { username: username, password: password }, {headers: {'Access-Control-Allow-Credentials': 'true','Content-Type':'application/JSON','Access-Control-Allow-Origin' 'http://localhost:3000'}})
        //     .then(function (response) {

        //         dispatch(loginSucess(response.data));
        //         console.log(response);
        //         // localStorage.setItem('token',)
        //     })
        //     .catch(function (error) {
        //         dispatch(loginFailed(error))
        //         console.log(error);
        //     });
    }
}