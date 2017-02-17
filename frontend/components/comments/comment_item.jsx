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

  componentWillReceiveProps(newProps){
    if(this.props.comment.body !== newProps.comment.body) {
      this.setState({editing: false});
    }
  }

  render(){
    const disabled = this.notOwner() ? 'comment-disable-tools' : '';
    return (
      <li className='comment'>
        <div className='comment-info'>
          <Link
            className='author-pic'
            to={`home/profile/${this.props.comment.author.id}`}>
            <img src={this.props.comment.author.image_url}></img>
          </Link>

          <p className='comment-author'>
            <Link to={`home/profile/${this.props.comment.author.id}`}>
              {this.props.comment.author.username}
            </Link>
            <span>{this.props.comment.posted}</span>
          </p>

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

        </div>
        <CommentBodyField
          editing={this.state.editing}
          comment={this.props.comment}
          updateComment={this.props.updateComment}/>
      </li>
    );
  }
}
