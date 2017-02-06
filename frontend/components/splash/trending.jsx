import React from 'react';
import Masonry from 'react-masonry-component';
import TrackContainer from '../shared/track_container';

const Trending = ({tracks}) => (
  <Masonry>
    {tracks.map(track => <TrackContainer track={track}/>)}
  </Masonry>
);

export default Trending;
