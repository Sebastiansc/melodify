import React from 'react';

export default class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  componentWillReceiveProps(props) {
    console.log(props.track.id);
    if (props.track.likes.includes(props.user.id)) {
      this.setState({ liked: true });
    }
  }

  toggleLike() {
    if (this.props.loggedIn) {
      let action = this.state.liked ? this.props.unlike : this.props.like;
      action(this.props.songId);
      this.setState({ liked: !this.state.liked });
    } else {
      this.props.cacheLike(this.props.songId);
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
        onClick={() => this.toggleLike()}>
      </button>
    );
  }
}
