import React from 'react';
import TrackContainer from '../shared/track_container';
import LikeContainer from '../shared/like_container';

export default class TrackItem extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className='chart-track'>
        <div className='chart-track-position'>{this.props.position}</div>
        <TrackContainer
          track={this.props.track}
          play={this.props.play}
          klass='chart-item'/>
        <div className='chart-track-actions'>
          <LikeContainer
            likedClass='chart-heart'
            unlikedClass='chart-dead-heart'
            track={this.props.track}/>
          <button className='chart-playlist'></button>
        </div>
      </div>
    );
  }
}
