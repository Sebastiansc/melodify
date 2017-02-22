import {connect} from 'react-redux';
import CommentForm from './comment_form';
import {createComment } from '../../actions/comment_actions';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = ({session}, {songId}) => ({
  user: session.currentUser,
  songId
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(CommentForm);
