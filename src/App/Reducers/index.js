import { combineReducers } from 'redux'
import loginReducer from './loginreducer';
import registerReducer from './RegisterReducer';
import vaccineReducer from '../Reducers/vaccineReducer';

export default combineReducers({
    loginReducer,
    registerReducer,
    vaccineReducer
})