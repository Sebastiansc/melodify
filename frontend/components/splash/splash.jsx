import React from 'react';
import Banner from './banner';
import SearchBarContainer from '../shared/search_bar_container';
import PlayerContainer from '../shared/player_container';
import TrendingContainer from './trending_container';

const Splash = () => (
  <div className='container splash'>
    <Banner/>
    <div className='splash-info'>
      <SearchBarContainer
        formClass="splash-search"
      />
    <div className='splash-trending'>
        <h2>Hear what's trending today</h2>
        <TrendingContainer/>
        <div className='top-50'>
          <button className='splash-explore'>
            Explore our top 50
          </button>
        </div>
      </div>
    </div>
    <PlayerContainer/>
  </div>
);

export default Splash;
