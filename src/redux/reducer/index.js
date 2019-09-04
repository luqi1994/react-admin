import {combineReducers} from 'redux';
import loginReducer from './login-reducer';

const reducers = {
    login:loginReducer
};

const allReducer = combineReducers(reducers);

export default allReducer;