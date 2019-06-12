

import { FETCH_REGISTER_REQUEST ,
FETCH_REGISTER_SUCESS,
FETCH_REGISTER_FAILED
}   from  '../Constants/ActionTypes'

const initialState = {
    data='',
    request:false,
    error:null
}

const registerReducer = (state = initialState,action)=>{

    switch(action.type){
        case FETCH_REGISTER_REQUEST:
        return{ ... state , fetch:true }

        case FETCH_REGISTER_SUCESS:
        return { ... state , fetch:false, data:action.data } 

        case FETCH_REGISTER_FAILED:
        return { ... state, fetch:false, error:action.error }
    }

    return state
}

export default registerReducer;