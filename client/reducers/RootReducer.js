import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import RegisterReducers from './RegisterReducers';

const rootReducer = combineReducers(
    {   
        routing: routerReducer,
        register: RegisterReducers
    });

export default rootReducer;