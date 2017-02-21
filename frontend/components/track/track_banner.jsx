import React from 'react';
import Grade from 'grade-js';
import TrackContainer from '../shared/track_container';

export default class TrackBanner extends React.Component {
  getGradient() {
    $('.track-detail-cover').addClass('loaded');
    const sourceImage = document.getElementById('image');
    const colorThief = new ColorThief();
    //Returns an array with 3 colors in rgb format
    const paletteArray = colorThief.getPalette(sourceImage,2);
    const container = $('.gradient-wrap');
    
    container.css(
      "backgroundImage",
      'linear-gradient( 135deg, rgb(' + paletteArray[0].join(',') + ') 0%, rgb(' + paletteArray[1].join(',') + ') 100%)'
    );
  }

  play(trackId) {
    this.props.nowPlaying(trackId, [this.props.track]);
  }

  togglePlay(e) {
    if (this.wrapper !== e.target) return;
    this.player.getWrappedInstance().togglePlay(e);
  }

  render() {
    return(
      <div
        className='track-banner-wrapper'
        onClick={ e => this.togglePlay(e)} >
        <div
          className='gradient-wrap'
          ref={wrapper => this.wrapper = wrapper}>
          <img
            id='image'
            className='track-detail-cover'
            src={this.props.track.cover_photo}
            onLoad={() => this.getGradient()}
            crossOrigin="anonymous">
          </img>
        </div>

        <div className='track-detail-actions-wrapper'>
          <div className='track-detail-actions'>
            <TrackContainer
              ref={player => this.player = player}
              play={trackId => this.play(trackId)}
              klass='track-detail-player'
              track={this.props.track}/>
          </div>
        </div>

      </div>
    );
  }
}
