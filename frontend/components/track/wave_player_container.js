import { connect } from 'react-redux';
import WavePlayer from './wave_player';
import { play,
         pause,
         next,
         recordPlay,
         recordProgress,
         clearProgress} from '../../actions/playing_actions';

const mapStateToProps = ({playing, session}) => ({
  loggedIn: Boolean(session.currentUser.id),
  state: playing.state,
  tracks: playing.tracks,
  songId: playing.songId,
  position: playing.position
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  next: idx => dispatch(next(idx)),
  recordPlay: songId => dispatch(recordPlay(songId)),
  recordProgress: position => dispatch(recordProgress(position)),
  clearProgress: () => dispatch(clearProgress())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {withRef: true})(WavePlayer);
