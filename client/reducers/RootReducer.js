import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import RegisterReducers from './RegisterReducers';
import LoginReducers from './LoginReducers';
import AppointmentReducers from './AppointmentReducers';
import UserReducers from './UserReducers';
import ProfileReducers from './ProfileReducers';

const rootReducer = combineReducers(
    {   
        routing: routerReducer,
        register: RegisterReducers,
        login: LoginReducers,
        appointments: AppointmentReducers,
        users: UserReducers,
        profile: ProfileReducers
    });

export default rootReducer;