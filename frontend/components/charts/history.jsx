// React components share internal state for complex objects through different instances when being rendered on the same page. This component needs a random number to be passed in to avoid duplicate key problems when the same track is rendered on both the like history and the listen history.
import React from 'react';
import HistoryItem from './history_item';
import { Link } from 'react-router';
import Loader from '../shared/loader';

export default class History extends React.Component {
  constructor(props) {
    super(props);
    this.fetched = false;
  }

  componentWillReceiveProps(props) {
    if (props.loggedIn && !this.fetched) {
      this.fetched = true;
      props.getTracks();
    }
  }

  componentWillMount() {
    if (this.props.loggedIn) {
      this.props.getTracks();
      this.fetched = true;
    }
  }

  play(trackId) {
    this.props.nowPlaying(trackId, this.props.tracks);
  }

  headerText() {
    if (!this.props.tracks.length) return '';
    if (this.props.collection === 'likes') {
      return `${this.props.tracks.length} likes`;
    } else {
      return 'Listen History';
    }
  }

  render() {
    if (!this.props.loggedIn && this.props.collection === 'likes') {
      return(
        <section className='history-pitch'>
          <Link className='pitch-wrapper' to='/'>
            <div className='heyhey'>
              <img
                 src="https://res.cloudinary.com/flikr/image/upload/v1487371094/heyhey_o97zwx.png">
              </img>
            </div>

            <div className='history-pitch-text'>
              <span className='history-mainpitch'>
                Join Melodify to enjoy full features
              </span>
              <span>
                Like your favorite songs. Build playlists. Find new music
              </span>
            </div>

          </Link>
          <Link to='/' className='history-pitch-button'>
            <span>Sign in or Create an account</span>
          </Link>
        </section>
      );
    } else if (!this.props.loggedIn || this.props.disabled) return null;

    return(
      <section className='like-history-container'>
        <Loader
          klass='history-loader'
          data={this.props.tracks}/>
        <div className='like-history-header'>
          <span
            className={`history-before-image ${this.props.image}`}>
            {this.headerText()}
          </span>
          <Link to='you/likes'>View all</Link>
        </div>
        {this.props.tracks.slice(0, 4).map( track => (
          <HistoryItem
            track={track}
            key={track.id * this.props.offset}
            play={trackId => this.play(trackId)}/>
        ))}
      </section>
    );
  }
}
