import { combineReducers } from 'redux'
import loginReducer from './loginreducer';
import registerReducer from './RegisterReducer';

export default combineReducers({
    loginReducer,
    registerReducer,
})