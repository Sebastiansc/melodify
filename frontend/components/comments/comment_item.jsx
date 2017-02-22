import React from 'react';
import CommentBodyField from './comment_body_field';
import {Link} from 'react-router';

export default class CommentItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {editing: false};
  }

  toggleEditMode(){
    if(this.notOwner()) return;
    this.setState({editing: !this.state.editing});
  }

  notOwner(){
    return this.props.user.id !== this.props.comment.author.id;
  }

  delete(){
    if(this.notOwner()) return;
    this.props.deleteComment(this.props.comment.id);
    this.toggleEditMode();
  }

  componentDidMount() {
    this.load();
  }

  componentWillReceiveProps(props){
    if(this.props.comment.body !== props.comment.body) {
      this.setState({editing: false});
    }

    this.load(props);
  }

  load(props = this.props) {
    if (props.comment.id !== null) {
      $('.comment-author-pic').addClass('loaded');
    }
  }

  render(){
    const disabled = this.notOwner() ? 'comment-disable-tools' : '';
    return (
      <li className='comment'>

        <div className='comment-info'>

          <div className='author-default-bg orange-bg'>
            <Link
              className='comment-author-pic smooth-show'
              style={{backgroundImage: `url('${photoUrl}')`}}
              to='#'>
              <img src={this.props.comment.author.image_url}></img>
            </Link>
          </div>

          <div className='comment-actions-wrapper'>
            <div className='comment-author'>
              <Link to='#'>
                {this.props.comment.author.username}
              </Link>
              <span>{this.props.comment.posted}</span>
            </div>

            <div className='comment-tools'>
              <i
                className={`fa fa-pencil-square-o ${disabled}`}
                aria-hidden="true"
                onClick={() => this.toggleEditMode()}>
              </i>
              <i aria-hidden="true"
                className={`fa fa-trash-o ${disabled}`}
                onClick={() => this.delete()}>
              </i>
            </div>
            <CommentBodyField
              editing={this.state.editing}
              comment={this.props.comment}
              updateComment={this.props.updateComment}/>
          </div>


        </div>

      </li>
    );
  }
}
