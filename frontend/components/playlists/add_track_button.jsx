import React from 'react';

const AddTrackButton = ({ addTrack, track, playlistId }) => (
  <button
    className='add-to-playlist'
    onClick={() => addTrack(playlistId, track)}>
    <span>Add to playlist</span>
  </button>
);

export default AddTrackButton;
