import React from 'react';
import CommentItem from './comment_item';

export default class Comments extends React.Component {
  componentWillReceiveProps(props) {
    if (props.comments.length) {
      $('comments-list-wrapper').addClass('loaded');
    }
  }

  render() {
    return(
      <div className='comments-list-wrapper smooth-show'>
        <ul className='comments-stream'>
          {this.props.comments.map(comment => (
            <CommentItem
              key={comment.id}
              comment={comment}
              user={this.props.user}
              updateComment={this.props.updateComment}
              deleteComment={this.props.deleteComment}/>)
            )}
          </ul>
        </div>
    );
  }
}
