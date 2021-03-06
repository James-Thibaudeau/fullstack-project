//login actions
//importing push and browserHistory doesn't sit well but it works
import { browserHistory } from 'react-router';
import { clearAppointments } from './AppointmentActions';
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
            message: 'logged out successfully',
            redirectTo: '/'
    };
}

export const LOGOUT_FAIL = 'LOGOUT_FAIL';
export function logoutFail() {
    return {
        type:LOGOUT_FAIL,
        message: 'logout failed'
    };
}

//this might not be the correct place for this action
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export function updateUserInfo(user) {
    return {
        type: UPDATE_USER_INFO,
        message: 'user updated',
        user
    };
}
//this function also might be better somewhere else
export function getUser(username) {
    return dispatch => {
        axios.get(APIURL+'users/'+username)
        .then(response => {
            dispatch(updateUserInfo(response.data));
        })
        .catch(error => {
            console.log('error getting user');
        });
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
                        dispatch(login(response));
                        browserHistory.push('/appointments');
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
          dispatch(clearAppointments());
          dispatch(logout());
          //this doesn't sit well with me
          browserHistory.push('/');
      })
      .catch(error => {
          return dispatch(logoutFail());
      });
    };
}