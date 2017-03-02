import React from 'react';
import AddTrackButtonContainer from './add_track_button_container';

const PlaylistItem = ({ playlist }) => (
  <li>
    <div className='track-artwork default-bg'>
      <Link
        to='#'
        className='track-link'/>
      <span
        className='track-artwork-cover bg smooth-show'
        style={{backgroundImage: playlist.cover_photo}}>
      </span>
    </div>

      <div className='track-text-info'>
        <div className='track-title'>
          <span className='track-title-wrap'>
            <Link
              className='track-title-text'
              to=''
              onClick={e => this.redirect( e)}>
              {playlist.title}
            </Link>
          </span>
        </div>
      </div>
  </li>
);

export default PlaylistItem;
