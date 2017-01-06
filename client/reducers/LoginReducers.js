//login reducers
import { Map } from 'immutable';
import { LOGIN, LOGIN_FAIL, LOGOUT, LOGOUT_FAIL, UPDATE_USER_INFO } from '../actions/LoginActions';

const initialState = {user: {}, isLoggedIn: false, message:''};

export default function (state = initialState, action) {  
  switch(action.type) {
    case LOGIN:
      return {user: action.user, isLoggedIn: action.isLoggedIn, message: action.message};
    case LOGIN_FAIL:
      return {user: action.user, isLoggedIn: action.isLoggedIn, message: action.message};
    case LOGOUT:
      return {user: action.user, isLoggedIn: action.isLoggedIn, message: action.message};
    case LOGOUT_FAIL:
      return {message: action.message};
    case UPDATE_USER_INFO:
      return {...state, user: action.user, message: action.message};
      
  }
  return state;
}