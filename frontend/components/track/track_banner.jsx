import React from 'react';
import Grade from 'grade-js';
import TrackContainer from '../shared/track_container';

export default class TrackBanner extends React.Component {
  getGradient() {
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

  render() {
    return(
      <div className='track-banner-wrapper'>
        <div className='gradient-wrap'>
          <img
            id='image'
            src={this.props.track.cover_photo}
            onLoad={() => this.getGradient()}
            crossOrigin="anonymous">
          </img>
        </div>

        <div className='track-actions-wrapper'>
          <div className='track-actions'>
            <TrackContainer track={this.props.track}/>
          </div>
        </div>

        <div className='track-cover'></div>
      </div>
    );
  }
}
