import { connect } from 'react-redux';
import SoundItem from './sound_item';
import { pause } from '../../actions/playing_actions';

const mapStateToProps = ({session, playing}) => ({
  user: session.currentUser,
  songUrl: playing.songUrl,
  state: playing.state
});

const mapDispatchToProps = dispatch => ({
  pause: () => dispatch(pause())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { withRef: true })(SoundItem);
