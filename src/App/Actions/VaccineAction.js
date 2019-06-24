import {
    FETCH_VACCINE_REQUEST,
    FETCH_VACCINE_SUCESS,
    FETCH_VACCINE_FAILED,

    FETCH_VACCINE_MONTHID_SUCESS,
    FETCH_VACCINE_MONTHID_FAILED
} from '../Constants/ActionTypes';

import axios from 'axios';


export const vaccineRequest = () => {
    return {
        type: FETCH_VACCINE_REQUEST,

    }
}

export const vaccineSucess = (data) => {
    return {
        type: FETCH_VACCINE_SUCESS,
        data: data
    }
}

export const vaccineFailed = (error) => {
    return {
        type: FETCH_VACCINE_FAILED,
        error: error

    }
}

export const fetchVaccine = () => {
    return dispatch => {
        dispatch(vaccineRequest());
        axios.get('http://localhost9002/api/v1/vaccine')
            // .then((res) => { res.json() })

            .then((res) => {

                dispatch(vaccineSucess())
                console.log(res)
            })
            .then((error) => {
                dispatch(vaccineFailed());
                console.log(error);
            })
    }
}


// vaccineMonthId fetching API
//const apiUrl = 'http://localhost:9002/api/v1/vaccine/2';
const apiUrl = 'http://localhost:9000/api/v1';

// export const vaccineMonthIdRequest = () => {
//     return {
//         type: FETCH_VACCINE_MONTHID_REQUEST,
//     }
// }

export const vaccineMonthIdsucess = (monthIdData) => (dispatch) => {
    console.log("monthdata", monthIdData);
    dispatch({
        type: FETCH_VACCINE_MONTHID_SUCESS,
        monthIdData
    })
}

export const vaccineMonthIdFailed = (error) => {
    return {
        type: FETCH_VACCINE_MONTHID_FAILED,
        error: error
    }
}


export const fetchVaccineMonthId = month => {
    console.log("month", month);
    return (dispatch) => {
        console.log(month, "month");
        return axios.get(`${apiUrl}/vaccine/${month}`)
            .then((response) => {
                dispatch(vaccineMonthIdsucess(response.data.result))
            })
            .catch((error) => {
                dispatch(vaccineMonthIdFailed(error));
            })
    }
}
