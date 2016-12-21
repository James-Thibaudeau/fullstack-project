//appointment reducers
import { CREATE_APPOINTMENT, CREATE_APPOIN_FAIL } from '../actions/AppointmentActions';

const initialState = {};

export default function (state = initialState, action) {  
  switch(action.type) {
    case CREATE_APPOINTMENT:
      return { message: action.message };
    case CREATE_APPOIN_FAIL:
      return { message: action.message };
  }
  return state;
}