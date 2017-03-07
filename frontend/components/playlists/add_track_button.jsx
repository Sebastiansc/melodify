import React from 'react';

export default class AddTrackButton extends React.Component {
  constructor() {
    super();
    this.added = false;
  }

  componentDidMount() {
    if (!this.props.playlist.tracks.length) return;
    let text = 'Add to playlist';
    let klass = '';
    for (var i = 0; i < this.props.playlist.tracks.length; i++) {
      if (this.props.playlist.tracks[i].id === this.props.track.id) {
        text = 'Added';
        this.added = true;
        klass = 'has-track';
      }
    }
    this.addedLook(text, klass);
  }

  addedLook(text, klass) {
    $(this.refs.text).html(text);
    $(this.refs.text).addClass(klass);
  }

  addTrack() {
    if (this.added) return;
    this.added = true;
    this.addedLook('Added', 'has-track');
    // Dispatch addTrack action from PlaylistItem parent component to allow for
    // needed state updates on it.
    this.props.addToPlaylist(
      this.props.playlist.id,
      this.props.track.id,
      this.props.addTrack
    );
  }

  render() {
    return(
      <button
        className='add-to-playlist'
        onClick={() => this.addTrack()}>
        <span ref='text'></span>
      </button>
    );
  }
}
