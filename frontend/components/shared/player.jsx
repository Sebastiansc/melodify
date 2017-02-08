import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router';

const style = {
  width: "100%",
  height: "auto"
};

export default class Player extends React.Component {
  constructor(props){
    super(props);
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


  playState() {
    if (this._isPlaying()) {
      return 'is-playing';
    } else {
      return 'is-paused';
    }
  }

  render(){
    // A song has been selected
    if (this.props.songId) {
      return(
        <div className='player'>
          <ReactPlayer
            url={this.audioUrl()}
            playing={this.props.state}
            controls={false}
            height={0}
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
                  <div className='playback-scroll-container'>
                    <div className='playback-progress-bar'></div>
                    <div className='playback-progress-tracker'
                         ref={progressBar => {this.progressBar = progressBar;}}>
                    </div>
                    <div className='playback-progress-handle'
                         ref={handle => this.handle = handle}>
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
                  <div className='volume-slider-progress'></div>
                  <div className='volume-slider-handle'></div>
                </div>
              </div>

              <div className='player-soundbadge'>
                <Link to='#'>
                  <span className='player-soundbadge-cover'></span>
                </Link>
                <div className='player-soundbadge-titlefield'>
                  <Link className='player-tracks-source' to='#'></Link>
                  <Link className='player-artist' to='#'></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
