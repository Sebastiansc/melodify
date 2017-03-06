import React from 'react';

export default class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.edge = 3;
    this.state = { tracks: props.tracks.slice(0, 3) };
  }

  addToPlaylist(e, track) {
    // Style button to show track was added.
    $(e.currentTarget).html('Added');
    $(e.currentTarget).addClass('added');
    // Transition opacity to hide track wrapper.
    $(this.refs[track.id]).addClass('hid');
    // Set time out to remove item once transition is ~over.
    this.props.addTrack(track);
    setTimeout(() => this.removeItem(track), 700);
  }

  removeItem(track) {
    let idx;
    // Find idx of track to remove.
    for (let i = 0; i < this.state.tracks.length; i++) {
      if (this.state.tracks[i].id === track.id) {
        idx = i;
        break;
      }
    }
    let tracks = this.state.tracks;
    // Remove from state.
    tracks.splice(idx, 1);
    // Push next track in track list.
    if (this.edge < this.props.tracks.length) {
      tracks.push(this.props.tracks[this.edge]);
      // Update edge to account for item pushed.
      this.edge += 1;
    }
    this.setState({ tracks });
  }

  receiveItem(track) {
    // Receive returned item from PlaylistCreate.
    const tracks = this.state.tracks;
    let idx;
    for (let i = 0; i < this.props.tracks.length; i++) {
      if (this.props.tracks[i].id === track.id) {
        idx = i;
        break;
      }
    }
    tracks.splice(idx, 0, track);
    this.setState({ tracks: tracks.slice(0, 3) });
  }

  renderTrackItem(track) {
    return(
      <div
        className='playlist-create-track-wrapper shown'
        key={track.id}
        ref={track.id}>
        <span
          className='recommendations-track-cover'
          style={{backgroundImage: `url('${track.thumbnail}')`}}>
        </span>

        <div className='recommendations-track-info'>
          <span className='playlist-create-artist-name'>
            {track.artist} -
          </span>

          <span className='playlist-create-title'>
            {track.title}
          </span>
        </div>

        <div className='playlist-add-button'>
          <button onClick={e => this.addToPlaylist(e, track)}>
            Add to playlist
          </button>
        </div>
      </div>
    );
  }

  render() {
    window.that = this;
    return(
      <div className='recommendations-wrapper'>
        <h3>Looking for more tracks? Add some from your likes.</h3>
        {this.state.tracks.map( track => this.renderTrackItem(track))}
      </div>
    );
  }
}
