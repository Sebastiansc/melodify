import React from 'react';

const CreateList = ({ tracks, returnItem, className }) => {
  const renderTrackItem = (track, idx) => {
    if (!track) {
      return (
        <div
          className='playlist-create-track-wrapper' key={idx}>
        </div>
      );
    } else {
      return(
        <div
          className='playlist-create-track-wrapper'
          key={track.id}>
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
              onClick={() => returnItem(track)}
              className='playlist-create-return-button'>
            </button>
          </div>
        </div>
      );
    }
  };

  return(
    <div className={`playlist-create-tracks-wrapper ${className}`}>
      { tracks.map( (track, idx) => (
        renderTrackItem(track, idx))
      )}
    </div>
  );
};

export default CreateList;
