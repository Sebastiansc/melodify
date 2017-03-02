import React from 'react';

const PlaylistCreate = ({ open, createPlaylist }) => {
  if (!open) return null;

  return(
    <div>
      <div className='playlist-create-form-wrapper'>
        <label>Playlist title</label>
        <form className='playlist-form'>
          <input className='playlist-input' type='text'>
          </input>
        </form>
        <div className='submit-wrapper'>
          <div className='privacy-options'>
            <label>Playlist will be</label>
            <input type='radio' name='privacy' value='public'/>
            <label htmlFor='public'>public</label>
            <input type='radio' name='privacy' value='private'/>
            <label htmlFor='private'>private</label>
          </div>
          <button className='signup'>Save</button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCreate;
