import React from 'react';
import Masonry from 'react-masonry-component';
import TrackContainer from '../shared/track_container';

const Trending = ({tracks}) => (
  <ul className='trending'>
    {tracks.slice(0, 12)
            .map(track => <TrackContainer track={track} key={track.id}
                                          klass='trending-item'/>)}
  </ul>
);

export default Trending;
