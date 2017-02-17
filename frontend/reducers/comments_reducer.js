import {RECEIVE_COMMENTS,
        REMOVE_COMMENT,
        RENEW_COMMENT,
        RECEIVE_COMMENT} from '../actions/comments_actions';
import merge from 'lodash/merge';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;
    case RENEW_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;
