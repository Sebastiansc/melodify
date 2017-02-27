import React from 'react';
import CollectionContainer from './collection_container';

const Overview = () => {
  return(
    <div className='overview-wrapper'>
      <CollectionContainer
        headerText='Recently Played'
        collection='plays'
        size={6} />
      <CollectionContainer
        headerText='Likes'
        collection='likes'
        size={24} />
    </div>
  );
};

export default Overview;
