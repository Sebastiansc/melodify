import { connect } from 'react-redux';
import Track from './track';

const mapStateToProps = ({session, playing}) => ({
  user: session.currentUser,
  songId: playing.songId,
  state: playing.state
});

export default connect(mapStateToProps)(Track);
