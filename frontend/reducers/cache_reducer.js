import { CACHE_LIKE,
         CACHE_COMMENT,
         CACHE_TRACK } from '../actions/cache_actions';
import merge from 'lodash/merge';


const CacheReducer = (state = {}, action) => {
  let newState = merge({}, state);

  Object.freeze(state);
  switch (action.type) {
    case CACHE_LIKE:
      return merge({ like: action.like}, newState );
    case CACHE_COMMENT:
      return merge({ comment: action.comment}, newState );
    case CACHE_TRACK:
      return merge({ track: action.track}, newState );
    default:
      return state;
  }
};

export default CacheReducer;
