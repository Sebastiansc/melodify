import React from 'react';

export default class TopTracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {genre: 'All music genres'};
  }

  trackList() {
    return "top 50";
  }

  componentDidMount() {
    this.unselector = $('body').click(() => (
      $('.charts-genres-wrapper').removeClass('charts-genres-show')
    ));

    $('.charts-filter').click(e => {
      e.stopPropagation();
      $('.charts-genres-wrapper').toggleClass('charts-genres-show');
    });
  }

  componentWillUnmount() {
    $('body').off('click', this.unselector);
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
            <button
              className='charts-filter'>
              <span>{this.state.genre}</span>
            </button>
            <div className='charts-genres-wrapper'>
              <ul className='charts-genres-list'>
                <li className='all'>All music genres</li>
                <li>Classical</li>
                <li>Country</li>
                <li>Dance & EDM</li>
                <li>Disco</li>
                <li>Electronic</li>
                <li>Folk</li>
                <li>Hip-Hop & Rap</li>
                <li>Indie</li>
                <li>Latin</li>
                <li>Pop</li>
                <li>R&B & Soul</li>
                <li>Reggae</li>
                <li>Reggaeton</li>
                <li>Reggaeton</li>
                <li>Rock</li>
              </ul>
            </div>
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
