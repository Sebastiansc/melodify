import React from 'react';
import LikeContainer from '../shared/like_container';

const TrackDetailActions = ({track}) => (
  <div className='track-share-actions'>
    <div className='track-share-interaction chart-track-actions'>
      <LikeContainer
        likedClass='chart-heart'
        unlikedClass='chart-dead-heart'
        track={track}/>
      <button className='chart-playlist'>Add</button>
    </div>
    <div className='track-share-info'>

    </div>
  </div>
);

export default TrackDetailActions;
