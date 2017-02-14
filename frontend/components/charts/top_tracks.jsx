import React from 'react';

export default class TopTracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {genre: 'All music genres'};
  }

  trackList() {
    return "top 50";
  }

  render() {
    return(
      <section className='charts-table'>
        <div className='charts-header'>
          <span>Charts</span>
        </div>
        <div className='charts-main'>
          <div className='charts-filter-wrapper'>
            <span className='top-50'>Top 50</span>
            <button className='charts-filter'>
              <span>{this.state.genre}</span>
            </button>
          </div>
        </div>

        <h3>
          {`The most played track in ${this.trackList()} on melodify this week`}
        </h3>

        <div className='charts-main-list-header'>
          <div className='list-header-number'>#</div>
          <div className='list-header-track'>Track</div>
          <div className='list-header-plays'>Plays (All time)</div>
        </div>
      </section>
    );
  }
}
