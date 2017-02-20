import React from 'react';

export default class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: this.isLiked() };
  }

  componentWillReceiveProps(props) {
    if (this.isLiked(props)) {
      this.setState({ liked: true });
    }
  }

  isLiked(props = this.props) {
    if(!props.track.likes) debugger;
    return  props.track.likes.includes(props.user.id);
  }

  toggleLike(e) {
    e.stopPropagation();
    if (this.props.loggedIn) {
      let action = this.state.liked ? this.props.unlike : this.props.like;
      action(this.props.track.id);
      this.setState({ liked: !this.state.liked });
    } else {
      this.props.cacheLike(this.props.track.id);
      this.props.toggleModal();
    }
  }


  render() {
    const klass = this.state.liked ?
                    this.props.likedClass :
                    this.props.unlikedClass;
    return(
      <button
        className={klass}
        onClick={e => this.toggleLike(e)}>
      </button>
    );
  }
}
