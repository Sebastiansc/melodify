import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
         LOGOUT,
         TOGGLE_MODAL} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {
  currentUser: {},
  errors: [],
  modal: false
};

const SessionReducer = (state = _nullUser, action) => {
  const newState = merge({}, state);

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge(newState, {
        currentUser: action.currentUser,
        errors: []
      });
    case RECEIVE_ERRORS:
    return merge(newState, {
      currentUser: {},
      errors: action.errors
    });
    case TOGGLE_MODAL:
      return merge(newState, {modal: !newState.modal});
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
