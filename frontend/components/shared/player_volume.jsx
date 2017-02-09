import React from 'react';

export default class PlayerVolume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {volume: 1};
  }

  componentDidMount() {
    let width = 20;
    for (var i = 10; i > 0 ; i--) {
      $(`#${i}`).css('width', `${width}px`);
      $(`#${i}`).addClass('volume');
      width -= 2;
    }
  }

  startDrag(e){
    e.dataTransfer.setDragImage(this.volumeHandle, -99999, -99999);
  }

  _updateProgressTrackers(percentageRequest) {
    if (percentageRequest >= 0 && percentageRequest <= 100) {
      $(this.volumeBar).css('height', `${percentageRequest}%`);
      $(this.volumeHandle).css('top', `${percentageRequest}%`);
    }
  }

  dragging(e){
    const percentageRequest = (
      e.nativeEvent.offsetY / $('.volume-slider-wrapper').height()
    ) * 100;
    console.log(e.nativeEvent.offsetY);
    this._updateProgressTrackers(percentageRequest);
  }

  endDrag(e) {
    let normalizedY = e.nativeEvent.offsetY % 1000;
    console.log(e.nativeEvent);
    console.log(normalizedY);
    if (normalizedY <= 0) normalizedY = 0;
    if (normalizedY >= 100) normalizedY = 100;
    this.props.volumeTo(normalizedY / 100);
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
    this.props.volumeTo(volume);
  }

  render() {
    return(
      <div className='player-volume'>
        <button
          className='volume-control'
          onClick={() => this.volume(0)}>
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
