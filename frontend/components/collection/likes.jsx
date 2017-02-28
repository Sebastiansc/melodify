import React from 'react';
import CollectionContainer from './collection_container';

const Likes = () => (
  <div className='likes-wrapper'>
    <CollectionContainer
      headerText="Hear the tracks you've liked"
      collection='likes'
      size={6}/>
  </div>
);

export default Likes;
