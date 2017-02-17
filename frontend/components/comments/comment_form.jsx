import React from 'react';
import CommentItem from './comment_item';
import {Link} from 'react-router';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {body: ''};
  }

  update(e){
    this.setState({body: e.target.value});
  }

  sendComment(){
    const comment = {
      body: this.state.body,
      photo_id: this.props.songId
    };
    this.props.createComment(comment);
    this.setState({body: ''});
  }

  render(){
    const klass = this.state.body ?
      'submit-comment' :
      'submit-comment disable-comments';
    return(
      <div className='comments'>
        <ul className='comments-stream'>
          {this.props.comments.map(comment => (
            <CommentItem
              key={comment.id}
              comment={comment}
              user={this.props.user}
              updateComment={this.props.updateComment}
              deleteComment={this.props.deleteComment}/>)
          )}

          <div className='comment-form'>
            <Link
              className='author-pic'
              to={`home/profile/${this.props.user.id}`}>
              <img src={this.props.user.image_url}></img>
            </Link>
            <textarea
              onChange={e => this.update(e)}
              value={this.state.body}
              placeholder='Comment...'>
            </textarea>
          </div>

          <button
            className={klass}
            onClick={() => this.sendComment()}>
            Comment
          </button>
        </ul>

      </div>
    );
  }
}

export default CommentForm;
