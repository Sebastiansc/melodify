import React from 'react';
import TrackContainer from '../shared/track_container';

export default class HistoryItem extends React.Component {
  play(e) {
    this.player.getWrappedInstance().togglePlay(e);
  }

  render() {
    return(
      <div className='charts-like-track' onClick={e => this.play(e)}>
        <TrackContainer
          klass="like-history-item chart-item"
          track={this.props.track}
          ref={player => this.player = player}
          play={this.props.play}/>
      </div>
    );
    }
}
