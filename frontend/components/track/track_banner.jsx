import React from 'react';
import TrackContainer from '../shared/track_container';

export default class TrackBanner extends React.Component {
  getGradient() {
    // Add opacity transition class.
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
    // Show with opacity transition.
    container.addClass('show');
  }

  play(trackId) {
    this.props.nowPlaying(trackId, [this.props.track]);
  }

  togglePlay(e) {
    // Avoid playing song when clicking on a child element.
    if (this.wrapper !== e.target) return;

    this.player.getWrappedInstance().togglePlay(e);
  }

  componentWillUnmount() {
    // ColorThief library appends a canvas to the DOM to read colors.
    $('canvas').remove();
  }

  render() {
    return(
      <div
        className='track-banner-wrapper'
        onClick={ e => this.togglePlay(e)} >
        <div
          className='gradient-wrap smooth-show'
          ref={wrapper => this.wrapper = wrapper}>
          <img
            src={this.props.track.cover_photo}
            id='image'
            className='track-detail-cover'
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
