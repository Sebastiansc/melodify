import React from 'react';
import { Link } from 'react-router';

const PlayerSoundbadge = ({track}) => (
  <div className='player-soundbadge'>
    <Link to='#'>
      <span
        className='player-soundbadge-cover'
        style={{backgroundImage: `url('${track.thumbnail}')`}}>
      </span>
    </Link>
    <div className='player-soundbadge-titlefield'>
      <Link className='player-tracks-source' to='#'>
        Playing from top 50 tracks
      </Link>
      <Link className='player-artist' to='#'>
        {track.artist}
      </Link>
    </div>
  </div>
);

export default PlayerSoundbadge;
