import React from 'react';
import CollectionContainer from './collection_container';

const Overview = () => (
  <div className='overview-wrapper'>
    <CollectionContainer headerText='Recently Played' collection='plays' />
    <CollectionContainer headerText='Likes' collection='likes' />
  </div>
);

export default Overview;
