import { connect } from 'react-router';
import { like, unlike } from '../../actions/like_actions';
import Like from './like';

const mapStateToProps = ({});

const mapDispatchToProps = dispatch => ({
  like: songId => dispatch(like(songId)),
  unlike: songId => dispatch(unlike(songId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Like);
