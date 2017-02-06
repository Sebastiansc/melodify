import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import TracksMiddleware from './tracks_middleware';
import createLogger from 'redux-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TracksMiddleware,
  logger
);

export default RootMiddleware;
