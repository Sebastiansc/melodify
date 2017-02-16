import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import TracksMiddleware from './tracks_middleware';
import SongMiddleware from './song_middleware';
import LikeMiddleware from './like_middleware';
import LikedTracksMiddleware from './liked_tracks_middleware';
import ListenHistoryMiddleware from './listen_history_middleware';
import createLogger from 'redux-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TracksMiddleware,
  SongMiddleware,
  LikeMiddleware,
  LikedTracksMiddleware,
  ListenHistoryMiddleware,
  logger
);

export default RootMiddleware;
