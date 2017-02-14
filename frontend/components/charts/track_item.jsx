import React from 'react';
import TrackContainer from '../shared/track_container';

export default class ChartItem extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className='chart-track'>
        <div className='chart-track-position'></div>
        <TrackContainer play={this.props.play} />
      </div>
    );
  }
}
