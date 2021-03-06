import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import TracksMiddleware from './tracks_middleware';
import SongMiddleware from './song_middleware';
import LikeMiddleware from './like_middleware';
import LikedTracksMiddleware from './liked_tracks_middleware';
import ListenHistoryMiddleware from './listen_history_middleware';
import CommentsMiddleware from './comments_middleware';
import PlaylistMiddleware from './playlist_middleware';
import createLogger from 'redux-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TracksMiddleware,
  SongMiddleware,
  LikeMiddleware,
  LikedTracksMiddleware,
  ListenHistoryMiddleware,
  CommentsMiddleware,
  PlaylistMiddleware,
  logger
);

export default RootMiddleware;
