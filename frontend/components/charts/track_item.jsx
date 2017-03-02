import React from 'react';
import TrackContainer from '../shared/track_container';
import LikeContainer from '../shared/like_container';
import PlaylistButtonContainer from '../playlists/playlist_button_container';

export default class TrackItem extends React.Component {
  constructor() {
    super();
  }

  playLook() {
    $('.chart-track').removeClass('chart-track-playing');
    $(this.wrapper).addClass('chart-track-playing');

  }

  play(trackId) {
    this.playLook();
    this.props.play(trackId);
  }

  togglePlay(e) {
    this.player.getWrappedInstance().togglePlay(e);
  }

  componentWillReceiveProps(props) {
    if (props.playing.songUrl === props.track.url) {
      this.playLook();
    }
  }


  render(){
    return(
      <div
        className='chart-track'
        id={this.props.track.id}
        ref={wrapper => this.wrapper = wrapper}
        onClick={e => this.togglePlay(e)}>
        <div className='chart-track-position'>{this.props.position}</div>
        <TrackContainer
          track={this.props.track}
          play={trackUrl => this.play(trackUrl)}
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
          <PlaylistButtonContainer track={this.props.track}/>
        </div>
      </div>
    );
  }
}
