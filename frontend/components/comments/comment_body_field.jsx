import React from 'react';

export default class CommentBodyField extends React.Component{
  constructor(props){
    super(props);
    this.updated = false;
    this.state = {body: '', editing: false};
  }

  update(e){
    this.setState({body: e.target.value});
  }

  componentWillReceiveProps(newProps){
    let editing;
    if(this.updated) {
      editing = false;
      this.updated = false;
    } else { editing = newProps.editing; }
    this.setState({editing});
  }

  componentDidUpdate() {
    // debugger;
    if (this.input) {
      $('.comment-edit-input').focus();
    }
  }

  updateComment(){
    const newAttr = {
      body: this.state.body,
      id: this.props.comment.id
    };
    this.updated = true;
    this.props.updateComment(newAttr);
  }

  render(){
    const klass = this.state.body ?
      'submit-comment' :
      'submit-comment disable-comments';

    if(this.state.editing){
      return(
        <div className='comment-edit'>
          <form onSubmit={() => this.updateComment()}>
            <input
              type='text'
              ref={input => this.input = input}
              defaultValue={this.props.comment.body}
              className='comment-edit-input'
              onChange={e => this.update(e)}>
            </input>
          </form>
        </div>
      );
    } else {
      return (
        <div className='comment-read'>
          {this.props.comment.body}
        </div>
      );
    }
  }
}
