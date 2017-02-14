import React from 'react';
import TopTracks from './top_tracks';
import LikeHistoryContainer from './like_history_container';

export default class Charts extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className='charts-page-outerbox'>
        <main className='charts-page-container'>
          <TopTracks/>
          <div className='clearfix'></div>
        </main>
        <section className='charts-extras'>
          <LikeHistoryContainer/>
        </section>
        <div className='clearfix'></div>
      </div>
    );

  }
}
