//Registration actions
import { loginHandler } from './LoginActions';
import axios from 'axios';
const APIURL = 'https://fullstack-project-jamesthibaudeau.c9users.io/api/';

export const REGISTER = 'REGISTER';
export function register() {
    return {
        type: REGISTER,
        registered: true
    };

}

export function registerHandler(username, password) {
    return dispatch => {
        console.log('Sending registration request...');
        axios.post(APIURL + 'auth/register', {
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