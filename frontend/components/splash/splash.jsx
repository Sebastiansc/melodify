import React from 'react';
import Banner from './banner';
import SearchBarContainer from '../shared/search_bar_container';
import TrendingContainer from './trending_container';

const Splash = () => (
  <div className='container'>
    <Banner/>
    <div>
      <SearchBarContainer
        formClass="splash-search"
        />
      <div>
        <h2>Trending today</h2>
        <Trending/>
        <div className='top-50'>
          <button>Explore our top 50</button>
        </div>
      </div>
    </div>
  </div>
);

export default Splash;
