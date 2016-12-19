//Registration reducers
import { Map } from 'immutable';
import { REGISTER } from '../actions/RegisterActions';

function register(state, registered) {
    console.log('reducer fired');
    return state.set('registered', Map({
    registered
}));
}

const initialState = {registered: false, message:''};

export default function (state = initialState, action) {  
  switch(action.type) {
    case REGISTER:
      return {registered: action.registered, message: action.message};
  }
  return initialState;
}