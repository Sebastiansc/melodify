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

  audioUrl() {
    return this.props.tracks[this._findTrackIdx()].audio_url;
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

  getLength(duration){

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
            onDuration={length => this.getLength(length)}
            width={"100%"}
            onPlay={() => this.resumePlaying()}
            onPause={() => this.props.pause()}/>

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
                    <span>0:09</span>
                  </div>
                  <div className='playback-scroll-container'>
                    <div className='playback-progress-bar'></div>
                    <div className='playback-progress-tracker'></div>
                    <div className='playback-progress-handle'></div>
                  </div>
                  <div className='playback-duration duration'>
                    <span>4:13</span>
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
