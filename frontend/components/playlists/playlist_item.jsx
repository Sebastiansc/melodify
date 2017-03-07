import React from 'react';
import { Link } from 'react-router';
import AddTrackButtonContainer from './add_track_button_container';

export default class PlaylistItem extends React.Component{
  addToPlaylist(playlistId, trackId, addTrack) {
    const currentLength = Number($(this.refs.trackLength).html());
    $(this.refs.trackLength).html(currentLength + 1);
    addTrack(playlistId, trackId);
  }

  render() {
    return(
      <li className='chart-item playlist-item'>
        <div className='track-artwork default-bg'>
          <Link
            to='#'
            className='track-link'/>
          <span
            className='track-artwork-cover bg'
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

        <div className='playlist-add-button'>
          <AddTrackButtonContainer
            track={this.props.track}
            playlist={this.props.playlist}
            addToPlaylist={this.addToPlaylist.bind(this)}/>
        </div>
      </li>
    );
  }
}
