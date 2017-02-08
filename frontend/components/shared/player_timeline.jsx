import React from 'react';

export default class PlayerTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  formatTime(duration) {
    this.duration = duration;
    const minutes = parseInt(duration / 60);
    let seconds = parseInt(duration % 60);
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  songLength(duration){
    $(this.totalTime).text(this.formatTime(duration));
  }

  recordProgress(progress){
    this.timePassed = this.timePassed || 0;
    this.timePassed += 0.5;
    if (this.timePassed % 1 === 0) {
      $(this.timeElapsed).text(this.formatTime(this.timePassed));
    }
    const percentagePlayed = progress.played * 100;
    $(this.progressBar).css('width', percentagePlayed);
    $(this.handle).css('left', percentagePlayed);
  }

  clearProgress() {
    this.timePassed = 0;
    $(this.timeElapsed).text('0:00');
    $(this.progressBar).css('width', 0);
  }

  dragging(e){
    e.dataTransfer.setDataImage(this.handle, -99999, -99999);

  }

  render(){
    return(
      <div className='player-timeline'>
        <div className='playbacktime'>
          <div className='playback-duration time-passed'>
            <span ref={timeElapsed => this.timeElapsed = timeElapsed}>
              0:00
            </span>
          </div>
          <div className='playback-scroll-container'>
            <div className='playback-progress-bar'></div>
            <div className='playback-progress-tracker'
                 ref={progressBar => {this.progressBar = progressBar;}}>
            </div>
            <div className='playback-progress-handle'
                 ref={handle => this.handle = handle}
                 draggable={true}
                 onDrag={e => this.dragging()}
                 onDragStart={e => console.log("onDragStart ", e)}
                 onDragEnd={e => console.log("onDragEnd ", e)}>
            </div>
          </div>
          <div className='playback-duration duration'>
            <span ref={totalTime => {this.totalTime = totalTime;}}>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
