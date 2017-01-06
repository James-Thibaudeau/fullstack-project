//Profile Actions
import { getUser } from './LoginActions';
import axios from 'axios';
const APIURL = 'https://fullstack-project-jamesthibaudeau.c9users.io/api/';

export const EDIT_PROFILE = 'EDIT_PROFILE';
export function editProfile() {
    return {
        type: EDIT_PROFILE,
        editingProfile: true,
        message: 'Editing profile'
    };
}

export const SAVE_PROFILE = 'SAVE_PROFILE';
export function saveProfile() {
    return {
        type: SAVE_PROFILE,
        editingProfile: false,
        message: 'saving profile'
    };
}

export function saveProfileHandler(username, userId, user) {
    return dispatch => {
        axios.put(APIURL + '/users/' + userId, user)
        .then(response => {
            dispatch(saveProfile());
        })
        .catch(error => {
            console.log(error);
        });
        
    };
}