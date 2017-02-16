import React from 'react';
import TopTracksContainer from './top_tracks_container';
import HistoryContainer from './history_container';

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
            <HistoryContainer
              collection='likes'
              image='gray-heart'/>
            <div className='clearfix'></div>
            <HistoryContainer
              collection='plays'
              image='calendar'/>
          </div>
        </section>
        <div className='clearfix'></div>
      </div>
    );

  }
}
