import React from 'react';
import TrackContainer from '../shared/track_container';

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
          <button className='chart-heart'></button>
          <button className='chart-playlist'></button>
        </div>
      </div>
    );
  }
}
