//Profile reducers
import { EDIT_PROFILE } from '../actions/ProfileActions';

const initialState = {editingProfile: false, message:''};

export default function (state = initialState, action) {  
  switch(action.type) {
    case EDIT_PROFILE:
      return {editingProfile: action.editingProfile, message: action.message};
  }
  return initialState;
}