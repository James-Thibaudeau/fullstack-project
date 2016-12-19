//login reducers
import { Map } from 'immutable';
import { LOGIN } from '../actions/LoginActions';

function login(state, isLoggedIn) {
    console.log('reducer fired');
    return state.set('registered', Map({
    isLoggedIn
}));
}

const initialState = {user: {}, isLoggedIn: false, message:''};

export default function (state = initialState, action) {  
  switch(action.type) {
    case LOGIN:
      return {user: action.user, isLoggedIn: action.isLoggedIn, message: action.message};
  }
  return initialState;
}