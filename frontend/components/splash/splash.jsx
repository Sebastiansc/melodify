import React from 'react';
import Banner from './banner';
import SearchBarContainer from '../shared/search_bar_container';

const Splash = () => (
  <div className='container'>
    <Banner/>
    <SearchBarContainer
      formClass="splash-search"
    />
  </div>
);

export default Splash;
