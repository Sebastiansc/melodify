import React from 'react';
import Masonry from 'react-masonry';
import Track from '../shared/track';

const Trending = ({tracks}) => (
  <Masonry>
    {tracks.map(track => <Track track={track}/>)}
  </Masonry>
);

export default Trending;
