import React from 'react';
// import CollectionItem from './collection_item';
import TrackContainer from '../shared/track_container';

// idx might not work as key. request random key from parent;
// size: amount of items to show
const Collection = ({ tracks, nowPlaying, size, extras, headerText}) => {

  const play = trackUrl => {
    nowPlaying(trackUrl, tracks);
  };

  return(
    <div className='collection-wraper'>
      <div className='collection-header'>
        <span>{headerText}</span>
      </div>
      <ul className='trending'>
        {tracks.slice(0, size).map( (track, idx) => (
          <TrackContainer
            klass='trending-item'
            play={ trackUrl => play(trackUrl)}
            track={track}
            key={idx}/>
        ))}
        {new Array(extras).map( filler => <Filler klass='trending-item'/>)}
      </ul>
    </div>
  );
};

export default Collection;
