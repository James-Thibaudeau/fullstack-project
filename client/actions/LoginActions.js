//login actions
import axios from 'axios';
const APIURL = 'https://fullstack-project-jamesthibaudeau.c9users.io/api/';

export const LOGIN = 'LOGIN';
export function login(response) {
    return {
            type: LOGIN,
            user: response.data,
            isLoggedIn: true,
            message: 'login successful'
            };
}

export const LOGIN_FAIL = 'LOGIN_FAIL';
export function loginFail() {
    return {
            type:LOGIN,
            user: {},
            isLoggedIn: false,
            message: 'login failed'
    };
}

export const LOGOUT = 'LOGOUT';
export function logout() {
    return {
            type:LOGOUT,
            user: {},
            isLoggedIn: false,
            message: 'logged out successfully'
    };
}

export const LOGOUT_FAIL = 'LOGOUT_FAIL';
export function logoutFail() {
    return {
        type:LOGOUT_FAIL,
        message: 'logout failed'
    };
}

export function loginHandler(username, password) {
    return dispatch => {
        console.log('Sending login request...');
        axios.post(APIURL+'auth/login', {
            username,
            password
          })
            .then(response => {
                console.log('login successful');
                axios.get(APIURL+'users/'+username)
                    .then(response => {
                        return dispatch(login(response));
                    }).catch(error => {
                        return dispatch(loginFail());
                    });
            })
            .catch(error => {
                    return dispatch(loginFail());
          });
    };
}

export function logoutHandler() {
    return dispatch => {
      console.log('Logging out from server');
      axios.get(APIURL+'/auth/logout')
      .then(response => {
          return dispatch(logout());
      })
      .catch(error => {
          return dispatch(logoutFail());
      });
    };
}