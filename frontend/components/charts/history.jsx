import React from 'react';
import HistoryItem from './history_item';
import { Link } from 'react-router';

export default class LikeHistory extends React.Component {
  componentWillMount() {
    this.props.getLikes();
  }

  play(trackId) {
    this.props.nowPlaying(trackId, this.props.likes);
  }

  render() {
    return(
      <section className='like-history-container'>
        <div className='like-history-header'>
          <span className='gray-heart'>
            {`${this.props.tracks.length} likes`}
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
