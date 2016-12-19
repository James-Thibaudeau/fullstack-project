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
        console.log('Sending login request...');
        axios.post('https://fullstack-project-jamesthibaudeau.c9users.io/api/auth/login', {
            username,
            password
          })
            .then(response => {
                axios.get('https://fullstack-project-jamesthibaudeau.c9users.io/api/users/'+username)
                    .then(response => {
                        return dispatch({
                            type: LOGIN,
                            user: response.data,
                            isLoggedIn: true,
                            message: 'login successful'
                        });
                    }).catch(error => {
                        return dispatch({
                            type:LOGIN,
                            user: {},
                            isLoggedIn: false,
                            message: 'login failed, no user'
                        });
                    });
            })
            .catch(error => {
                    return dispatch({
                        type: LOGIN,
                        isLoggedIn: false,
                        message: 'login failed'
                    });
          });
};
}