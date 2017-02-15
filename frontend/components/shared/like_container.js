import { connect } from 'react-redux';
import { like, unlike } from '../../actions/like_actions';
import { toggleModal } from '../../actions/session_actions';
import { cacheLike } from '../../actions/cache_actions';
import Like from './like';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser.id),
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  like: songId => dispatch(like(songId)),
  unlike: songId => dispatch(unlike(songId)),
  toggleModal: () => dispatch(toggleModal()),
  cacheLike: likeData => dispatch(cacheLike(likeData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Like);
