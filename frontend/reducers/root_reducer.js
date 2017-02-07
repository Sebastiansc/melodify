import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import PlayingReducer from './playing_reducer';

export default combineReducers({
  session: SessionReducer,
  tracks: TracksReducer,
  playing: PlayingReducer
});
