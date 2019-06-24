import {
    FETCH_VACCINE_REQUEST,
    FETCH_VACCINE_SUCESS,
    FETCH_VACCINE_FAILED,
    FETCH_VACCINE_MONTHID_SUCESS,
    FETCH_VACCINE_MONTHID_FAILED
} from '../Constants/ActionTypes';


const initialState = {
    vaccineData: [],
    vaccineRequest: false,
    error: null,

    monthIdData: [],
    vaccineMonthIdError: null

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
        default:
            return state;

    }
}

export default vaccineReducer;