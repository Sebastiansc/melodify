import React from 'react';
import TrackContainer from '../shared/track_container';

export default class LikeHistoryItem extends React.Component {
  play() {
    console.log("like item #play");
    this.player.getWrappedInstance().togglePlay();
  }

  render() {
    return(
      <div className='charts-like-track' onClick={() => this.play()}>
        <TrackContainer
          klass="like-history-item chart-item"
          track={this.props.track}
          ref={player => this.player = player}
          play={this.props.play}/>
      </div>
    );
    }
}
