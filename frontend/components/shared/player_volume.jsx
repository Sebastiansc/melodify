import React from 'react';

export default class PlayerVolume extends React.Component {
  constructor(props) {
    super(props);
    this.currentVolume = 1;
    this.muted = false;
  }

  volumeBar(i) {
    return $(`.volume-slider-wrapper div[data-v='${i}']`);
  }
  componentDidMount() {
    let width = 20;
    for (let i = 10; i > 0 ; i--) {
      let $volume = this.volumeBar(i);
      $volume.css('width', `${width}px`);
      $volume.addClass('volume');
      width -= 2;
    }
  }

  volume(volume) {
    let ids = [];
    for (let i = 1; i <= volume * 10; i++) ids.push(i);
    for (let id = 1; id <= 10; id++) {
      let $volume = this.volumeBar(id);
      if (!ids.includes(id)) {
        $volume.addClass('volume-off');
      } else {
        $volume.removeClass('volume-off');
      }
    }
    if (volume > 0) this.currentVolume = volume;
    this.props.volumeTo(volume);
  }

  toggleMute() {
    $('.volume-control').toggleClass('volume-muted');
    if (this.muted) {
      this.volume(this.currentVolume);
      this.muted = false;
    } else {
      this.volume(0);
      this.muted = true;
    }
  }

  render() {
    return(
      <div className='player-volume'>
        <button
          className='volume-control'
          onClick={() => this.toggleMute()}>
        </button>
        <div className='volume-slider' >
          <div className='volume-slider-wrapper'>
            <div data-v='10' onClick={() => this.volume(1)}></div>
            <div data-v='9' onClick={() => this.volume(0.9)}></div>
            <div data-v='8' onClick={() => this.volume(0.8)}></div>
            <div data-v='7' onClick={() => this.volume(0.7)}></div>
            <div data-v='6' onClick={() => this.volume(0.6)}></div>
            <div data-v='5' onClick={() => this.volume(0.5)}></div>
            <div data-v='4' onClick={() => this.volume(0.4)}></div>
            <div data-v='3' onClick={() => this.volume(0.3)}></div>
            <div data-v='2' onClick={() => this.volume(0.2)}></div>
            <div data-v='1' onClick={() => this.volume(0.1)}></div>
          </div>
        </div>
      </div>
    );
  }
}
