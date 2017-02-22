import React from 'react';
import CommentItem from './comment_item';

const Comments = props => (
  <ul className='comments-stream'>
    {props.comments.map(comment => (
      <CommentItem
        key={comment.id}
        comment={comment}
        user={props.user}
        updateComment={props.updateComment}
        deleteComment={props.deleteComment}/>)
    )}
  </ul>
);

export default Comments;
