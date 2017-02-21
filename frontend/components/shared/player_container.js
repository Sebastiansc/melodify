import { connect } from 'react-redux';
import Player from './player';
import { play,
         pause,
         next,
         recordPlay,
         recordProgress} from '../../actions/playing_actions';

const mapStateToProps = ({playing, session}) => ({
  loggedIn: Boolean(session.currentUser.id),
  state: playing.state,
  tracks: playing.tracks,
  songId: playing.songId,
  position: playing.position,
  fetchProgress: playing.fetchProgress
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  next: idx => dispatch(next(idx)),
  recordPlay: songId => dispatch(recordPlay(songId)),
  recordProgress: position => dispatch(recordProgress(position))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
