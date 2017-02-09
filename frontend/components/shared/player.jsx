import React from 'react';
import ReactPlayer from 'react-player';
import PlayerSoundbadge from './player_soundbadge.jsx';

const style = {
  width: "100%",
  height: "auto"
};

export default class Player extends React.Component {
  constructor(props){
    super(props);
    this.seeking = false;
    this.state = { volume: 1};
  }

  _isPlaying(){
    return this.props.state;
  }

  _findTrackIdx(){
    for (let i = 0; i < this.props.tracks.length; i++) {
      if (this.props.tracks[i].id === this.props.songId){
        return i;
      }
    }
  }

  currentTrack(){
    return this.props.tracks[this._findTrackIdx()];
  }

  audioUrl() {
    return this.currentTrack().audio_url;
  }

  togglePlay() {
    if (this._isPlaying()) {
      this.props.pause();
    } else {
      this.props.play();
    }
  }

  nextSong(){
    this.props.next(this._findTrackIdx());
  }

  resumePlaying() {
    // Event gets called on initial play. Check to avoid unecessary dispatch.
    if (!this._isPlaying()) this.props.play();
  }

  playState() {
    if (this._isPlaying()) {
      return 'is-playing';
    } else {
      return 'is-paused';
    }
  }

  // Playbacktimeline methods

  formatTime(duration) {
    const minutes = parseInt(duration / 60);
    let seconds = parseInt(duration % 60);
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  songLength(duration){
    this.duration = duration;
    $(this.totalTime).text(this.formatTime(duration));
  }

  recordProgress(progress){
    if (!this.seeking){
      const percentagePlayed = progress.played * 100;
      this.progress = percentagePlayed;
      const timePassed = (percentagePlayed * this.duration) / 100;
      $(this.timeElapsed).text(this.formatTime(parseInt(timePassed)));
      this._updateProgressTrackers(percentagePlayed);
    }
  }

  _updateProgressTrackers(percentagePlayed) {
    if (percentagePlayed >= 0 && percentagePlayed <= 100) {
      $(this.progressBar).css('width', `${percentagePlayed}%`);
      $(this.handle).css('left', `${percentagePlayed}%`);
    }
  }

  clearProgress() {
    this.timePassed = 0;
    $(this.timeElapsed).text('0:00');
    $(this.progressBar).css('width', 0);
  }

  startDrag(e){
    e.dataTransfer.setDragImage(this.handle, -99999, -99999);
    this.seeking = true;
    // Save starting x coordinate and percentage of track played
    this.dragStartX = e.nativeEvent.clientX;
    this.dragStartPercent = this.progress;
  }

  _fractionSeeked(offsetX) {
    return offsetX / $('.playback-progress-bar').width();
  }

  dragging(e){
    e.preventDefault();
    const seekPosition = (
      e.nativeEvent.offsetX / $('.playback-progress-bar').width()
    ) * 100;
    this._updateProgressTrackers(seekPosition);
  }

  jumpTo(e) {
    this.player.seekTo(this._fractionSeeked(e.nativeEvent.offsetX));
  }

  endDrag(e) {
    // For reason uknown the dragEnd nativeEvent element adds a leading 100 to
    // the clientX coordinate
    this.seeking = false;
    this.player.seekTo(this._fractionSeeked(e.nativeEvent.offsetX % 1000));
  }

  render(){
    // A song has been selected
    if (this.props.songId) {
      return(
        <div className='player'>
          <ReactPlayer
            ref={player => { this.player = player;}}
            url={this.audioUrl()}
            playing={this.props.state}
            controls={false}
            height={0}
            volume={this.state.volume}
            onDuration={duration => this.songLength(duration)}
            width={"100%"}
            onPlay={() => this.resumePlaying()}
            onPause={() => this.props.pause()}
            onStart={() => this.clearProgress()}
            progressFrequency={500}
            onProgress={progress => this.recordProgress(progress)}/>

          <div className='player-controls container'>
            <div className='player-controls-elements'>

              <button className='skip-control previous'></button>
              <button
                className={`track-state ${this.playState()}`}
                onClick={() => this.togglePlay()}>
              </button>
              <button
                className='skip-control next'
                onClick={() => this.nextSong()}>
              </button>

              <div className='player-timeline'>
                <div className='playbacktime'>
                  <div className='playback-duration time-passed'>
                    <span ref={timeElapsed => this.timeElapsed = timeElapsed}>
                      0:00
                    </span>
                  </div>
                  <div className='playback-scroll-container'
                       onClick={ e => this.jumpTo(e)}
                       draggable={true}
                       onDrag={e => this.dragging(e)}
                       onDragStart={e => this.startDrag(e)}
                       onDragEnd={e => this.endDrag(e)}>
                    <div className='playback-progress-bar' >
                    </div>
                    <div
                      className='playback-progress-tracker'
                      ref={progressBar => {this.progressBar = progressBar;}}>
                    </div>
                    <div
                      className='playback-progress-handle'
                      ref={handle => this.handle = handle} >
                    </div>
                  </div>
                  <div className='playback-duration duration'>
                    <span ref={totalTime => {this.totalTime = totalTime;}}>
                    </span>
                  </div>
                </div>
              </div>

              <div className='player-volume'>
                <button className='volume-control'></button>
                <div className='volume-slider'>
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

              <PlayerSoundbadge track={this.currentTrack()}/>

            </div>
          </div>

        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
