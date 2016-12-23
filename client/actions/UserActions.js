//User Actions
import axios from 'axios';
const APIURL = 'https://fullstack-project-jamesthibaudeau.c9users.io/api/';

//action creators
export const GET_USERS = 'GET_USERS';
export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    };
}

export const GET_USERS_FAIL = 'GET_USERS_FAIL';
export function getUserFail() {
    return {
        type: GET_USERS_FAIL,
        message: 'could not get users'
    };
}


//api functions
export function getUserHandler() {
    return dispatch => {
        axios.get(APIURL+'users')
        .then(response =>{
            dispatch(getUsers(response.data));
        })
        .catch(error =>{
            dispatch(getUserFail());
        });
    };
}