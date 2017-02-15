import { connect } from 'react-redux';
import { like, unlike } from '../../actions/like_actions';
import { toggleModal } from '../../actions/session_actions';
import Like from './like';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser.id)
});

const mapDispatchToProps = dispatch => ({
  like: songId => dispatch(like(songId)),
  unlike: songId => dispatch(unlike(songId)),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Like);
