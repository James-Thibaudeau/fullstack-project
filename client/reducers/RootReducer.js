import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import RegisterReducers from './RegisterReducers';
import LoginReducers from './LoginReducers';
import AppointmentReducers from './AppointmentReducers';
import UserReducers from './UserReducers';

const rootReducer = combineReducers(
    {   
        routing: routerReducer,
        register: RegisterReducers,
        login: LoginReducers,
        appointments: AppointmentReducers,
        users: UserReducers
    });

export default rootReducer;