import React from 'react';
import WavePlayer from '../track/wave_player_container';
import TrackContainer from '../track/track_container';
import Like from '../shared/like';

export default class WaveItem extends React.Component {
  render() {
    return(
      <div className='play-item-wrapper'>
        <TrackContainer
          track={this.props.track}
          play={this.props.play}/>
        <WavePlayerContainer />
      </div>
    );
  }
}
