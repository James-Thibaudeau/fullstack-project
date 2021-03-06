//appointment reducers
import { CREATE_APPOINTMENT, CREATE_APPOIN_FAIL, GET_APPOINTMENTS, GET_APPOIN_FAIL, FETCH_APPOINTMENTS, CLEAR_APPOINTMENTS } from '../actions/AppointmentActions';

const initialState = {};

export default function (state = initialState, action) {  
  switch(action.type) {
    case CREATE_APPOINTMENT:
      return { message: action.message };
    case CREATE_APPOIN_FAIL:
      return { message: action.message };
    case FETCH_APPOINTMENTS:
      return { message: action.message };
    case GET_APPOINTMENTS:
      return { appointments: action.appointments, message: action.message };
    case GET_APPOIN_FAIL:
      return { message: action.message };
    case CLEAR_APPOINTMENTS:
      return initialState
  }
  return state;
}