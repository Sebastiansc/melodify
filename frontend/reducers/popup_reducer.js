import { RECEIVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const PopupReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKE:
      return action.track;
    default:
      return state;
  }
};

export default PopupReducer;
