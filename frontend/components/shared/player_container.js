import { connect } from 'react-redux';
import Player from './player';
import { play, pause } from '../../actions/playing_actions';

const mapStateToProps = ({playing}) => ({
  playing
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
