import React from 'react';
import SessionButtons from '../session/buttons';

const Banner = () => (
  <div className='banner'>
    <div className='banner-overlay'></div>
    <div className='banner-signup'>
      <span className='brand'>Melodify</span>
      <SessionButtons/>
    </div>
    <div className='banner-message'>
      <p>Stream all your favorite music</p>
      <p className='message-pop'>Uninterrupted</p>
    </div>
  </div>
);

export default Banner;
