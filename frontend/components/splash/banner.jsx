import React from 'react';
import SessionButtonsContainer from '../session/buttons_container';

const Banner = () => (
  <div className='banner'>
    <div className='banner-overlay'></div>
    <div className='banner-signup'>
      <span className='brand'>Melodify</span>
      <SessionButtonsContainer/>
    </div>
    <div className='banner-message'>
      <p>Stream all your favorite music</p>
      <p className='message-pop'>Uninterrupted</p>
    </div>
  </div>
);

export default Banner;
