import React from 'react';
import { Link } from 'react-router';

export default class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tracks: props.tracks.slice(0) };
  }

  addedStyling(e, track) {
    // Style button to show track was added.
    $(e.currentTarget).html('Added');
    $(e.currentTarget).addClass('added');
    // Transition opacity to hide track wrapper.
    $(this.refs[track.id]).addClass('hid');
  }

  addToPlaylist(e, track) {
    this.addedStyling(e, track);
    // Add track to PlaylistCreate list.
    this.props.addTrack(track);
    // Set time out to remove item once transition is ~over.
    setTimeout(() => this.removeItem(track), 700);
  }

  removeItem(track) {
    // Find idx of track to remove.
    let idx = this.findTrack(this.state.tracks, track);

    let tracks = this.state.tracks;
    // Replace clicked track from state with null placeholder.
    tracks.splice(idx, 1, null);
    this.setState({ tracks });
  }

  receiveItem(track) {
    // Receive returned item from PlaylistCreate.
    const tracks = this.state.tracks;
    let idx = this.findTrack(this.props.tracks, track);
    if (idx >= 0) {
      // Remove null space holder and place track.
      tracks.splice(idx, 1, track);
    } else {
      // Track is selected track.
      tracks.unshift(track);
    }
    this.setState({ tracks });
  }

  findTrack(collection, item) {
    for (let i = 0; i < collection.length; i++) {
      if (!collection[i]) continue;
      if (collection[i].id === item.id) return i;
    }
    return -1;
  }

  renderTrackItem(track) {
    if (!track) return null;
    return(
      <div
        className='playlist-create-track-wrapper shown'
        key={track.id}
        ref={track.id}>
        <Link
          to={`${track.ownerUrl}/${track.url}`}
          className='recommendations-track-cover'
          style={{backgroundImage: `url('${track.thumbnail}')`}}>
        </Link>

        <div className='recommendations-track-info'>
          <Link
            to={`${track.ownerUrl}`}
            className='playlist-create-artist-name'>
            {track.artist} -
          </Link>

          <Link
            to={`${track.ownerUrl}/${track.url}`}
            className='playlist-create-title'>
            {track.title}
          </Link>
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
    let itemCount = 0;
    return(
      <div className='recommendations-wrapper'>
        <h3>Looking for more tracks? Add some from your likes.</h3>
        { this.state.tracks.map( track => {
            // Stop rendering when 3 tracks have passed.
            if (itemCount === 3) return;
            if (track) itemCount++;
            return this.renderTrackItem(track);
        })}
      </div>
    );
  }
}
