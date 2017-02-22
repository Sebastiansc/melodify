import React from 'react';
import CommentItem from './comment_item';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentWillReceiveProps = this.load;
  }

  load(props = this.props) {
    if (props.comments.length) {
      $('.cm-show').addClass('loaded');
    }
  }

  render() {
    return(
      <div className='comments-list-wrapper'>
        <h3 className='comments-stream-header cm-show smooth-show'>
          {`${this.props.comments.length} comments`}
        </h3>
        <ul className='comments-stream cm-show smooth-show'>
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
