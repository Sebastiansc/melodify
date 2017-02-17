// React components share internal state for complex objects through different instances when being rendered on the same page. This component needs a random number to be passed in to avoid duplicate key problems when the same track is rendered on both the like history and the listen history.
import React from 'react';
import HistoryItem from './history_item';
import { Link } from 'react-router';
import Loader from '../shared/loader';

export default class History extends React.Component {
  componentWillMount() {
    this.props.getLikes();
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
