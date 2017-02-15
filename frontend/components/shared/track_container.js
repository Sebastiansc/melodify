import { connect } from 'react-redux';
import Track from './track';
import { pause } from '../../actions/playing_actions';

const mapStateToProps = ({session, playing}) => ({
  user: session.currentUser,
  songId: playing.songId,
  state: playing.state
});

const mapDispatchToProps = dispatch => ({
  pause: () => dispatch(pause())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { withRef: true })(Track);
