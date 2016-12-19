import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import RegisterReducers from './RegisterReducers';
import LoginReducers from './LoginReducers';

const rootReducer = combineReducers(
    {   
        routing: routerReducer,
        register: RegisterReducers,
        login: LoginReducers
    });

export default rootReducer;