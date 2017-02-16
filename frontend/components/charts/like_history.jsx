import React from 'react';
import LikeHistoryItem from './like_history_item';
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
            {`${this.props.likes.length} likes`}
          </span>
          <Link to='you/likes'>View all</Link>
        </div>
        {this.props.likes.slice(0, 5).map( track => (
          <LikeHistoryItem
            track={track}
            key={track.id}
            play={trackId => this.play(trackId)}/>
        ))}
      </section>
    );
  }
}
