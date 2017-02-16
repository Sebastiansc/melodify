import React from 'react';
import TrackContainer from '../shared/track_container';
import LikeContainer from '../shared/like_container';

export default class TrackItem extends React.Component {
  constructor() {
    super();
  }

  play(trackId) {
    $('.chart-track').removeClass('chart-track-playing');
    $(this.wrapper).addClass('chart-track-playing');
    this.props.play(trackId);
  }

  play() {
    this.player.getWrappedInstance().togglePlay();
  }


  render(){
    return(
      <div
        className='chart-track'
        ref={wrapper => this.wrapper = wrapper}
        onClick={() => this.play()}>
        <div className='chart-track-position'>{this.props.position}</div>
        <TrackContainer
          track={this.props.track}
          play={trackId => this.play(trackId)}
          klass='chart-item'
          ref={player => this.player = player}/>

        <div className='chart-item-plays'>
          <span>{this.props.track.timesPlayed}</span>
        </div>

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
