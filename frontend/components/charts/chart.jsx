import React from 'react';
import TopTracksContainer from './top_tracks_container';
import LikeHistoryContainer from './like_history_container';

export default class Charts extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className='charts-page-outerbox'>
        <main className='charts-page-container'>
          <TopTracksContainer/>
          <div className='clearfix'></div>
        </main>
        <section className='charts-extras'>
          <div className='l-bar-fixed'>
            <LikeHistoryContainer/>
            <div className='clearfix'></div>
          </div>
        </section>
        <div className='clearfix'></div>
      </div>
    );

  }
}
