import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import RegisterReducers from './RegisterReducers';
import LoginReducers from './LoginReducers';
import AppointmentReducers from './AppointmentReducers';

const rootReducer = combineReducers(
    {   
        routing: routerReducer,
        register: RegisterReducers,
        login: LoginReducers,
        appointments: AppointmentReducers
    });

export default rootReducer;