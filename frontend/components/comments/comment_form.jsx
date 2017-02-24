import React from 'react';
import CommentItem from './comment_item';
import {Link} from 'react-router';


export default class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {body: ''};
  }

  update(e){
    this.setState({body: e.target.value});
  }

  sendComment(e) {
    e.preventDefault();
    const comment = {
      body: this.state.body,
      song_id: this.props.songId
    };
    this.props.createComment(comment);
    this.setState({body: ''});
  }

  authorPhoto() {
    return this.props.user.cover_photo || photoUrl;
  }

  render(){
    return(
      <div className='comment-container-transition-layer animated fadeIn'>
        <div className='comment-form'>

          <div className='author-pic'>
            <Link
              to={`home/profile/${this.props.user.id}`}
              style={{backgroundImage: `url('${this.authorPhoto()}')`}}>
            </Link>
          </div>

          <div className='text-wrapper'>
            <form onSubmit={e => this.sendComment(e)}>
              <input
                className='comment-box'
                onSubmit={this.sendComment}
                onChange={e => this.update(e)}
                value={this.state.body}
                placeholder='Write a comment'>
              </input>
            </form>
          </div>

        </div>
      </div>
    );
  }
}
