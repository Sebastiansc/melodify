import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import PlayingReducer from './playing_reducer';
import SongReducer from './song_reducer';
import LikedTrackReducer from './liked_tracks_reducer';
import ListenHistoryReducer from './listen_history_reducer';
import CacheReducer from './cache_reducer';

export default combineReducers({
  session: SessionReducer,
  tracks: TracksReducer,
  playing: PlayingReducer,
  song: SongReducer,
  cache: CacheReducer,
  likes: LikedTrackReducer,
  plays: ListenHistoryReducer
});
