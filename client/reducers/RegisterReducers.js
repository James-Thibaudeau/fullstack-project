//Registration reducers
import { REGISTER } from '../actions/RegisterActions';

const initialState = {registered: false, message:''};

export default function (state = initialState, action) {  
  switch(action.type) {
    case REGISTER:
      return {registered: action.registered, message: action.message};
  }
  return initialState;
}