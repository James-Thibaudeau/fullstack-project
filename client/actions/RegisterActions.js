//Registration actions
import axios from 'axios';
import { loginHandler } from './LoginActions';

export const REGISTER = 'REGISTER';
export function register() {
    console.log('action fired');
    return {
        type: REGISTER,
        registered: true
    };

}

export function registerHandler(username, password) {
    return dispatch => {
        console.log('Sending registration request...');
        axios.post('https://fullstack-project-jamesthibaudeau.c9users.io/api/auth/register', {
            username,
            password
          })
        .then(response => {
            console.log('registration successful');
            console.log('logging in...');
            dispatch(loginHandler(username, password));
            return dispatch({
                    type: REGISTER,
                    registered: true,
                    message: 'user created'
            });
        })
        .catch(error => {
            console.log(error);
            return dispatch({
                type: REGISTER,
                registered: false,
                message: 'user already exists'
            });
        });
};
}