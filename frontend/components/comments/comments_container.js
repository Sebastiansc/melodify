import { connect } from 'react-redux';
import Comments from './comments';
import { updateComment,
         deleteComment } from '../../actions/comment_actions';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = ({comments, session}, {songId}) => ({
  comments: toArray(comments).reverse(),
  user: session.currentUser,
  songId
});

const mapDispatchToProps = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Comments);
