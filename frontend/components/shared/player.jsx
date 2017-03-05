import React from 'react';
import ReactPlayer from 'react-player';
import PlayerSoundbadge from './player_soundbadge.jsx';
import PlayerVolume from './player_volume.jsx';

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
      if (this.props.tracks[i].url === this.props.songUrl){
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
    this.progress = progress;
    // Only update progress trackers if user is not currently seeking.
    if (!this.seeking){
      const percentagePlayed = progress.played * 100;
      const timePassed = (percentagePlayed * this.duration) / 100;
      $(this.timeElapsed).text(this.formatTime(parseInt(timePassed)));
      this._updateProgressTrackers(percentagePlayed);
    }
  }

  sendProgressUpdate(position) {
    this.props.recordProgress(position, 'player');
  }

  componentWillReceiveProps(props) {
    // Wave player is requesting current position in track.
    if (props.fetchProgress) {
      this.sendProgressUpdate(this.progress.played);
    }
    if (props.position && props.updater === 'wave') {
      this.player.seekTo(props.position);
      // Clear playing.progress in case component receives other new props.
      this.props.clearProgress();
    }
  }

  _updateProgressTrackers(percentagePlayed) {
    if (percentagePlayed >= 0 && percentagePlayed <= 100) {
      $(this.progressBar).css('width', `${percentagePlayed}%`);
      $(this.handle).css('left', `${percentagePlayed}%`);
    }
  }

  startSong() {
    // Record play in database
    if (this.props.loggedIn) this.props.recordPlay(this.currentTrack().id);

    // Add bottom padding
    $('body').addClass('player-on');

    this.clearProgress();
  }

  clearProgress() {
    this.timePassed = 0;
    $(this.timeElapsed).text('0:00');
    $(this.progressBar).css('width', 0);
  }

  startDrag(e){
    // Remove data transfer default shadow image.
    e.dataTransfer.setDragImage(this.handle, -99999, -99999);
    this.seeking = true;
  }

  _fractionSeeked(offsetX) {
    return offsetX / $('.playback-progress-bar').width();
  }

  dragging(e){
    const seekPosition = (
      e.nativeEvent.offsetX / $('.playback-progress-bar').width()
    ) * 100;
    this._updateProgressTrackers(seekPosition);
  }

  jumpTo(e) {
    const position = this._fractionSeeked(e.nativeEvent.offsetX);
    this.sendProgressUpdate(position);
    this.player.seekTo(position);
  }

  endDrag(e) {
    // dragEnd nativeEvent element adds a leading 100 to the clientX coordinate
    this.seeking = false;
    let media = this._fractionSeeked(e.nativeEvent.offsetX % 1000);
    this.sendProgressUpdate(media);
    this.player.seekTo(media);
  }

  volumeTo(volume) {
    this.setState({volume: volume});
  }


  render(){
    // A song has been selected
    if (this.props.songUrl) {
      return(
        <div className='player animated fadeInUp'>
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
            onStart={() => this.startSong()}
            onEnd={() => this.nextSong()}
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
                    <span
                      ref={timeElapsed => {this.timeElapsed = timeElapsed; }}
                    >
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
                      ref={handle => { this.handle = handle; }}>
                    </div>
                  </div>
                  <div className='playback-duration duration'>
                    <span ref={totalTime => {this.totalTime = totalTime;}}>
                    </span>
                  </div>
                </div>
              </div>

              <PlayerVolume volumeTo={volume => this.volumeTo(volume)}/>

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
