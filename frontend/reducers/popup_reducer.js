import { RECEIVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const PopupReducer = (state = {}, action) => {
  let newState = merge({}, state);

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKE:
      newState.track = action.track;
      return newState;
    default:
      return state;
  }
};

export default PopupReducer;
