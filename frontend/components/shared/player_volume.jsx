import React from 'react';

export default class PlayerVolume extends React.Component {
  constructor(props) {
    super(props);
    this.currentVolume = 1;
    this.muted = false;
  }

  componentDidMount() {
    let width = 20;
    for (let i = 10; i > 0 ; i--) {
      $(`#${i}`).css('width', `${width}px`);
      $(`#${i}`).addClass('volume');
      width -= 2;
    }
  }

  volume(volume) {
    let ids = [];
    for (let i = 1; i <= volume * 10; i++) ids.push(i);
    for (let id = 1; id <= 10; id++) {
      if (!ids.includes(id)) {
        $(`#${id}`).addClass('volume-off');
      } else {
        $(`#${id}`).removeClass('volume-off');
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
            <div id='10' onClick={() => this.volume(1)}></div>
            <div id='9' onClick={() => this.volume(0.9)}></div>
            <div id='8' onClick={() => this.volume(0.8)}></div>
            <div id='7' onClick={() => this.volume(0.7)}></div>
            <div id='6' onClick={() => this.volume(0.6)}></div>
            <div id='5' onClick={() => this.volume(0.5)}></div>
            <div id='4' onClick={() => this.volume(0.4)}></div>
            <div id='3' onClick={() => this.volume(0.3)}></div>
            <div id='2' onClick={() => this.volume(0.2)}></div>
            <div id='1' onClick={() => this.volume(0.1)}></div>
          </div>
        </div>
      </div>
    );
  }
}
