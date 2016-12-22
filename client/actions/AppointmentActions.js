//appointment actions
import axios from 'axios';
const APIURL = 'https://fullstack-project-jamesthibaudeau.c9users.io/api/';

//action creators
export const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';
export function createAppointment() {
    return {
            type: CREATE_APPOINTMENT,
            message: 'appointment created successfully'
            };
}

export const CREATE_APPOIN_FAIL = 'CREATE_APPOIN_FAIL';
export function createAppoinFail() {
    return {
            type: CREATE_APPOIN_FAIL,    
            message: 'appointment creation failed'
    };
}

export const FETCH_APPOINTMENTS = 'FETCH_APPOINTMENTS';
export function fetchAppointments() {
    return {
            type:FETCH_APPOINTMENTS,
            message: 'appointments fetching'
    };
}

export const GET_APPOINTMENTS = 'GET_APPOINTMENTS';
export function getAppointments(appointments) {
    return {
            type:GET_APPOINTMENTS,
            appointments,
            message: 'appointments fetched'
    };
}

export const GET_APPOIN_FAIL = 'GET_APPOIN_FAIL';
export function getAppoinFail() {
    return {
            type: GET_APPOIN_FAIL,
            message: 'could not get appointments'
    };
}

//appointment handlers
export function createAppoinHandler(appointment) {
    return dispatch => {
        console.log('booking appointment...');
        axios.post(APIURL+'/appointments', appointment)
        .then(response => {
            console.log('appointment booked successfully');
            dispatch(createAppointment());
            
        })
        .catch(error => {
            console.log('appointment booking failed');
            dispatch(createAppoinFail());
        });
    };
}

export function getAppointmentHandler(userid) {
    return dispatch => {
      console.log('getting appointments...');
      axios.get(APIURL+'/appointments/'+userid)
      .then(response => {
          dispatch(getAppointments(response.data));
      })
      .catch(error => {
          dispatch(getAppoinFail());
      });
    };
}