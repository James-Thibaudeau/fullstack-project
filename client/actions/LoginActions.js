//login actions
import axios from 'axios';

export const LOGIN = 'LOGIN';
export function login() {
    console.log('action fired');
    return {
        type: LOGIN,
        registered: true
    };

}

export function loginHandler(username, password) {
    return dispatch => {
        console.log('Sending registration request...');
        axios.post('https://fullstack-project-jamesthibaudeau.c9users.io/api/auth/login', {
            username,
            password
          })
          .then(response => {
            console.log(response);
                return dispatch({
                    type: LOGIN,
                    user: {},
                    isLoggedIn: true,
                    message: 'login successful'
                });
          })
          .catch(error => {
            console.log(error);
                return dispatch({
                    type: LOGIN,
                    isLoggedIn: false,
                    message: 'login failed'
                });
          });
};
}