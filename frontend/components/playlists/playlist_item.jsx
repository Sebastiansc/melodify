import React from 'react';
import { Link, withRouter } from 'react-router';
import AddTrackButtonContainer from './add_track_button_container';

class PlaylistItem extends React.Component{
  addToPlaylist(playlistId, trackId, addTrack) {
    const currentLength = Number($(this.refs.trackLength).html());
    $(this.refs.trackLength).html(currentLength + 1);
    addTrack(playlistId, trackId);
  }

  renderAddToPlaylistButton() {
    if (this.successView()) return;
    return(
      <div className='playlist-add-button'>
        <AddTrackButtonContainer
          track={this.props.track}
          playlist={this.props.playlist}
          addToPlaylist={this.addToPlaylist.bind(this)}/>
      </div>
    );
  }

  renderGoToPlaylistButton() {
    if (!this.successView()) return;
    return(
      <div className='playlist-add-button'>
        <Link
          onClick={e => this.redirect(e)}
          className='add-to-playlist'>
          Go to playlist
        </Link>
      </div>
    );
  }

  successView() {
    return this.props.className === 'success-view';
  }

  redirect(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.router.replace(
      `${this.props.playlist.ownerUrl}/set/${this.props.playlist.url}`
    );
  }

  render() {
    return(
      <li className={`chart-item playlist-item ${this.props.className}`}>
        <div className='track-artwork default-bg'>
          <Link
            to='#'
            className='track-link'/>
          <span
            className='track-artwork-cover bg'
            onClick={e => this.redirect(e)}
            style={
              {backgroundImage: `url('${this.props.playlist.cover_photo}')`}}
            >
          </span>
        </div>

        <div className='track-text-info'>

          <div className='track-title'>
            <span className='track-title-wrap'>
              <Link
                className='track-title-text'
                to={
                  `${this.props.playlist.ownerUrl}
                  /set/
                  ${this.props.playlist.url}`
                }>
                {this.props.playlist.name}
              </Link>
            </span>
          </div>

          <div className='playlist-item-count-wrapper'>
            <span className='audio-image'></span>
            <span ref='trackLength'>{this.props.playlist.tracks.length}</span>
          </div>

        </div>

      { this.renderGoToPlaylistButton() }

      { this.renderAddToPlaylistButton() }
      </li>
    );
  }
}

export default withRouter(PlaylistItem);
