import React from 'react';
import HistoryItem from './history_item';
import { Link } from 'react-router';
import Loader from '../shared/loader';

export default class LikeHistory extends React.Component {
  componentWillMount() {
    this.props.getLikes();
  }

  play(trackId) {
    this.props.nowPlaying(trackId, this.props.tracks);
  }

  headerText() {
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
          <span className={`history-before-image ${this.props.image}`}>
            {this.headerText()}
          </span>
          <Link to='you/likes'>View all</Link>
        </div>
        {this.props.tracks.slice(0, 5).map( track => (
          <HistoryItem
            track={track}
            key={track.id}
            play={trackId => this.play(trackId)}/>
        ))}
      </section>
    );
  }
}
