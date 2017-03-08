import React from 'react';
import PlaylistItem from './playlist_item';
import CreateList from './create_list';

const CreateSuccess = ({ playlist, closeModal }) => (
  <div>
    <PlaylistItem
      playlist={playlist}
      closeModal={closeModal}
      className='success-view' />
    <CreateList tracks={playlist.tracks} className='success-view'/>
  </div>
);

export default CreateSuccess;
