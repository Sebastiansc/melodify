import React from 'react';
import RecommendationsContainer from './recommendations_container';
import CreateSuccess from './create_success';
import CreateList from './create_list';
import { customUrl } from '../../reducers/selectors';

export default class PlaylistCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tracks: [props.track, null, null, null], success: false };
  }

  componentWillReceiveProps(props) {
    if (!this.playlistSent) return;
    // New playlist was created and received successfully.
    if (props.playlists.length > this.props.playlists.length) {
      // Find playlist that matches playlist created locally.
      this.playlist = props.playlists.filter( playlist => (
        playlist.url === this.playlist.url
      ))[0];
      // Remove submit feedback.
      setTimeout(() => {
        $(this.refs.save).removeClass('animation-stripes');
        // Open success view.
        this.setState({ success: true });
      }, 1000);
    }
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

  // Validates playlist title. Returns boolean to determine if is valid.
  validateInput(e) {
    const hasTitle = Boolean(this.refs.title.value);
    if (!hasTitle) {
      $(this.refs.title).addClass('warn');
      $(this.refs.warning).html('Enter a title.');
    }
    return hasTitle;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.validateInput()) return;
    this.createPlaylist();
    // Give user feedback of playlist being saved.
    $(this.refs.save).addClass('animation-stripes');
  }

  createPlaylist() {
    this.playlist = {
      name: this.refs.title.value,
      url: customUrl(this.refs.title.value),
      public: $('input[name="privacy"]:checked').val() === "public"
    };
    // Get array of ids to populate playlist on db.
    let tracks = this.state.tracks.filter( track => track );
    tracks = tracks.map( track => track.id );
    // Boolean to flag componentWillReceiveProps that playlist was created.
    this.playlistSent = true;
    // Send playlist creation to database.
    this.props.createPlaylist(this.playlist, tracks);
  }

  handleChange(e) {
    $(this.refs.title).removeClass('warn');
    $(this.refs.warning).html('');
  }

  renderForm() {
    return(
      <div className='playlist-create-form-wrapper'>
        <label>Playlist title <span className='asterisk'>*</span></label>
        <form className='playlist-form' onSubmit={e => this.handleSubmit(e)}>
          <input
            className='playlist-input'
            type='text'
            ref='title'
            onChange={e => this.handleChange(e)}>
          </input>
          <span className='font-orange sp-small' ref='warning'></span>
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

  render() {
    window.that = this;
    if (!this.props.open) return null;
    if (this.state.success) return (
      <CreateSuccess
        playlist={this.playlist}
        closeModal={this.props.closeModal}/>
    );
    return(
      <div>
        {this.renderForm()}
        <CreateList
          tracks={this.state.tracks}
          returnItem={track => this.returnItem(track)}/>
        <div className='playlist-create-separator'></div>
        <RecommendationsContainer
          addTrack={ track => this.addTrack(track)}
          ref={ rcmBox => { this.rcmBox = rcmBox; } }/>
      </div>
    );
  }
}
