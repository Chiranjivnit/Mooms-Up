import {
    FETCH_VACCINE_REQUEST,
    FETCH_VACCINE_SUCESS,
    FETCH_VACCINE_FAILED,
    FETCH_VACCINE_MONTHID_SUCESS,
    FETCH_VACCINE_MONTHID_FAILED,
    SEND_VACCINE_DATA,
    SEND_VACCINE_TAKEN
} from '../Constants/ActionTypes';


const initialState = {
    vaccineData: [],
    vaccineRequest: false,
    error: null,

    monthIdData: [],
    vaccineMonthIdError: null,

    sendVaccineData: [],

    sendVaccineTaken: []

}

const vaccineReducer = (state = initialState, action) => {
    console.log("action", action);
    switch (action.type) {
        case FETCH_VACCINE_REQUEST:
            return { ...state, fetch: true }

        case FETCH_VACCINE_SUCESS:
            return { ...state, fetch: false, vaccineData: action.vaccineData }

        case FETCH_VACCINE_FAILED:
            return { ...state, fetch: false, error: action.error }


        case FETCH_VACCINE_MONTHID_SUCESS:
            return { ...state, fetch: false, monthIdData: action.monthIdData }

        case FETCH_VACCINE_MONTHID_FAILED:
            return { ...state, fetch: false, vaccineMonthIdError: action.vaccineMonthIdError }

        case SEND_VACCINE_DATA:
            return { ...state, sendVaccineData: action.monthIdData }

        case SEND_VACCINE_TAKEN:
            return { ...state, sendVaccineTaken: action.vaccineTaken }

        default:
            return state;

    }
}

export default vaccineReducer;