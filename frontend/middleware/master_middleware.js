import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import TracksMiddleware from './tracks_middleware';
import SongMiddleware from './song_middleware';
import LikeMiddleware from './like_middleware';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TracksMiddleware,
  SongMiddleware,
  LikeMiddleware,
  promiseMiddleware,
  logger
);

export default RootMiddleware;
