import { connect } from 'react-redux';
import Player from './player';
import { play, pause, next } from '../../actions/playing_actions';

const mapStateToProps = ({playing}) => ({
  state: playing.state,
  tracks: playing.tracks,
  songId: playing.songId
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  next: idx => dispatch(next(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
