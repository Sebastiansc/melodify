import React from 'react';

export default class PlayerVolume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {volume: 1};
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

  render() {
    return(
      <div className='player-volume'>
        <button className='volume-control'></button>
        <div className='volume-slider' >
          <div
            className='volume-slider-wrapper'
            draggable={true}
            onDrag={e => this.dragging(e)}
            onDragStart={e => this.startDrag(e)}
            onDragEnd={e => this.endDrag(e)}>
            <div className='volume-slider-bar'></div>
            <div
              className='volume-slider-progress'
              ref={volumeBar => this.volumeBar = volumeBar}>
            </div>
            <div
              className='volume-slider-handle'
              ref={volumeHandle => this.volumeHandle = volumeHandle}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
