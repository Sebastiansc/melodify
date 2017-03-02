import React from 'react';

export default class PlaylistButton extends React.Component {
  openModal(e) {
    e.stopPropagation();
    if (this.props.loggedIn) {
      this.props.toggleModal(this.props.track);
    } else {
      this.openOnLogin = true;
      this.props.toggleSessionModal();
    }
  }

  componentWillReceiveProps(props) {
    if(!this.props.loggedIn && props.loggedIn && this.openOnLogin) {
      this.props.toggleModal(this.props.track);
    }
  }

  render() {
    return(
      <button
        className='chart-playlist'
        onClick={e => this.openModal(e)}>
      </button>
    );
  }
}
