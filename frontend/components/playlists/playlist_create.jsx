import React from 'react';
import RecommendationsContainer from './recommendations_container';

export default class PlaylistCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tracks: [props.track, null, null, null] };
  }

  addTrack(track) {
    let idx;
    // Find the first null item.
    for (let i = 0; i < this.state.tracks.length; i++) {
      if (!this.state.tracks[i]) {
        idx = i;
        break;
      }
    }
    // Replace null item with track.
    const tracks = this.state.tracks;
    if (idx !== undefined) {
      tracks.splice(idx, 1, track);
    } else {
      tracks.push(track);
    }
    this.setState({ tracks });
  }

  returnItem(track) {
    let idx;
    for (let i = 0; i < this.state.tracks.length; i++) {
      if (this.state.tracks[i].id === track.id) {
        idx = i;
        break;
      }
    }
    // Remove track from local collection.
    this.reorderTracks(idx);
    // Return track to recommendations box.
    this.rcmBox.getWrappedInstance().receiveItem(track);
  }

  reorderTracks(idx) {
    const tracks = this.state.tracks;
    tracks.splice(idx, 1);
    tracks.push(null);
    this.setState({ tracks });
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = {
      name: this.refs.title.value,
      public: $('input[name="privacy"]:checked').val() === "public"
    };
    let tracks = this.state.tracks.filter( track => track );
    // Get array of ids to populate playlist on db.
    tracks = tracks.map( track => track.id );
    this.props.createPlaylist(playlist, tracks);
    $(this.refs.save).addClass('animation-stripes');
    setTimeout(() => {
      this.props.closeModal();
      $(this.refs.save).removeClass('animation-stripes');
    }, 1500);
  }

  renderForm() {
    return(
      <div className='playlist-create-form-wrapper'>
        <label>Playlist title <span className='asterisk'>*</span></label>
        <form className='playlist-form' onSubmit={e => this.handleSubmit(e)}>
          <input className='playlist-input' type='text' ref='title'>
          </input>
        </form>
        <div className='submit-wrapper'>
          <div className='privacy-options'>
            <label>Playlist will be</label>
            <input type='radio' name='privacy' value='public' defaultChecked />
            <label htmlFor='public'>public</label>
            <input type='radio' name='privacy' value='private'/>
            <label htmlFor='private'>private</label>
          </div>
          <button
            className='signup'
            onClick={e => this.handleSubmit(e)}
            ref='save'>
            Save
          </button>
        </div>
      </div>
    );
  }

  renderTrackList() {
    return(
      <div className='playlist-create-tracks-wrapper'>
        { this.state.tracks.map( (track, idx) => (
          this.renderTrackItem(track, idx))
        )}
      </div>
    );
  }

  renderTrackItem(track, idx) {
    if (!track) {
      return (
        <div
          className='playlist-create-track-wrapper' key={idx}>
        </div>
      );
    } else {
      return(
        <div className='playlist-create-track-wrapper' key={track.id}>
          <span
            className='playlist-create-track-cover'
            style={{backgroundImage: `url('${track.thumbnail}')`}}>
          </span>
          <span className='playlist-create-artist-name'>
            {track.artist} -
          </span>

          <span className='playlist-create-title'>
            {track.title}
          </span>
          <div className='return-button-wrapper'>
            <button
              onClick={() => this.returnItem(track)}
              className='playlist-create-return-button'>
            </button>
          </div>
        </div>
      );
    }
  }

  render() {
    if (!this.props.open) return null;
    return(
      <div>
        {this.renderForm()}
        {this.renderTrackList()}
        <div className='playlist-create-separator'></div>
        <RecommendationsContainer
          addTrack={ track => this.addTrack(track)}
          ref={ rcmBox => { this.rcmBox = rcmBox; } }/>
      </div>
    );
  }
}
