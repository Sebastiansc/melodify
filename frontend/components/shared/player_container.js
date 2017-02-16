import { connect } from 'react-redux';
import Player from './player';
import { play, pause, next, recordPlay } from '../../actions/playing_actions';

const mapStateToProps = ({playing, session}) => ({
  loggedIn: Boolean(session.currentUser.id),
  state: playing.state,
  tracks: playing.tracks,
  songId: playing.songId
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  next: idx => dispatch(next(idx)),
  recordPlay: songId => dispatch(recordPlay(songId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
