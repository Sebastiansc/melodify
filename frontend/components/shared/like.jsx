import React from 'react';

export default class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: this.props.liked };
  }

  toggleLike() {
    let action = this.state.liked ?
                 this.props.unlike :
                 this.props.like;
    action(this.props.songId);
    this.setState({ liked: !this.state.liked });
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
