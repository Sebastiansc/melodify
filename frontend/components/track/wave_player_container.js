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
  songUrl: playing.songUrl,
  position: playing.position,
  updater: playing.updater
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  next: idx => dispatch(next(idx)),
  recordPlay: songId => dispatch(recordPlay(songId)),
  recordProgress: (position, comp) => dispatch(recordProgress(position, comp)),
  clearProgress: () => dispatch(clearProgress())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {withRef: true})(WavePlayer);
