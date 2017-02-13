import React from 'react';

export default class Charts extends React.Component {
  constructor() {
    super();
    this.state = {genre: 'All music genres'};
  }

  trackList() {
    return "top 50";
  }
  render(){
    return(
      <main>
        <div className='charts-header'>
          <span></span>
        </div>

        <div className='charts-main'>
          <div className='charts-filter'>
            <span className='top-50'></span>
            <button>{this.state.genre}</button>
          </div>
        </div>

        <h3>
          {`The most played track in ${this.trackList()} on melodify this week`}
        </h3>

        <div className='charts-main-list-header'>
          <div className='list-header-number'>#</div>
          <div className='list-header-track'>Track</div>
          <div className='list-header-plays'>Plays(All time)</div>
        </div>
      </main>
    );
  }
}
