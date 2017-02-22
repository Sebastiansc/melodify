import React from 'react';
import { Link } from 'react-router';
import TrackItem from './track_item';

export default class TopTracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {genre: 'All music genres'};
  }

  trackList() {
    return "top 50";
  }

  componentDidMount() {
    this.unselector = $('body').click(() => {
      $('.charts-genres-wrapper').removeClass('charts-genres-show');
      $('.charts-filter').removeClass('charts-filter-dropped');
    });

    $('.charts-filter').click(e => {
      e.stopPropagation();
      $('.charts-genres-wrapper').toggleClass('charts-genres-show');
      $('.charts-filter').toggleClass('charts-filter-dropped');
    });
  }

  updateGenre(e) {
    if (e.target.tagName === "UL") return;
    const genre = e.target.text || e.target.children[0].text;
    this.setState({ genre });
  }

  componentWillUnmount() {
    $('body').off('click', this.unselector);
  }

  play(songId) {
    this.props.nowPlaying(songId, this.props.tracks);
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
              <ul className='charts-genres-list'
                  onClick={e => this.updateGenre(e)}>
                <li className='all'>
                  <Link to='charts/top'>All music genres</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=classical'>Classical</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=country'>Country</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=dance'>Dance</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=disco'>Disco</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=electronic'>Electronic</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=folk'>Folk</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=hiphoprap'>Hip-Hop & Rap</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=Indie'>Indie</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=latin'>Latin</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=pop'>Pop</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=rbsoul'>R&B & Soul</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=reggae'>Reggae</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=reggaeton'>Reggaeton</Link>
                </li>
                <li>
                  <Link to='charts/top?genre=rock'>Rock</Link>
                </li>
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
        {this.props.tracks.map((track, idx) => (
          <TrackItem
            playing={this.props.playing}
            position={idx + 1}
            play={songId => this.play(songId)}
            key={track.id}
            track={track}/>)
        )}
      </section>
    );
  }
}
