//Registration actions
import axios from 'axios';

export function registerHandler(username, password) {
    return dispatch => {
        console.log('Sending registration request...');
        axios.post('https://fullstack-project-jamesthibaudeau.c9users.io/api/auth/register', {
            username,
            password
          })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
    };
    
}