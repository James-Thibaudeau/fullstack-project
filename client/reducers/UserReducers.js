//user reducers
import { Map } from 'immutable';
import { GET_USERS, GET_USERS_FAIL } from '../actions/UserActions';

const initialState = {};

export default function (state = initialState, action) {  
  switch(action.type) {
    case GET_USERS:
      return {users: action.users, message: action.message};
    case GET_USERS_FAIL:
      return {message: action.message};
  }
  return state;
}