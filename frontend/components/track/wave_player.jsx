import React from 'react';
import WavePlayerContainer from './wave_player_container';

export default class WavePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.loaded = false;
    this.delay = 0;
  }

  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#f2f2f2',
      progressColor: '#f50',
      barWidth: 2.5,
      height: 100,
      cursorColor: '#f78b56',
      hideScrollbar: true,
    });
    this.wavesurfer.setVolume(0);
    this.wavesurfer.on('seek', pos => this.positionChange(pos));
  }

  positionChange(pos) {
    if (!this.isSeekLocal) {
      this.isSeekLocal = true;
      this.props.recordProgress(pos);
    }
  }

  loadAudio(props) {
    if (!this.props.track.id) {
      this.wavesurfer.load(props.track.audio_url);
      this.wavesurfer.on('ready', () => this.sync());
    }
  }

  sync() {
    this.loaded = true;
    if (!this.position) return;
    window.clearInterval(this.syncDelay);
    const duration = this.wavesurfer.getDuration();
    this.isSeekLocal = true;
    this.wavesurfer.seekTo(this.position + (this.delay / duration));
    this.togglePlay();
  }

  componentWillReceiveProps(props) {
    this.loadAudio(props);

    // Sync with Player component through application state
    if (this._isCurrentTrack(props)) {
      this.togglePlay(props);
      // New position being seeked was requested by this component.
      if (props.position && !this.isSeekLocal) {
        this.seek(props);
      } else if (props.position) {
        // Update isSeekLocal to prepare for next recordProgress
        this.isSeekLocal = false;
      }
    }
  }

  seek(props) {
    // Waves have already loaded.
    if (this.loaded) {
      this.wavesurfer.seekTo(props.position);
    } else {
      // Wavesurfer is rendering slowly. Set counter to account for delay.
      this.syncDelay = window.setInterval(() => this.delay += 1, 1000);
      // Cache position for when the waves finish rendering.
      this.position = props.position;
    }
    this.props.clearProgress();
  }

  togglePlay(props = this.props) {
    if (props.state) this.wavesurfer.play();
    if (!props.state) this.wavesurfer.pause();
  }

  _isCurrentTrack(props) {
    return props.track.id === props.songId;
  }

  render() {
    return(
      <div className='wave-player-wrapper'>
        <div id="waveform"></div>
      </div>
    );
  }
}
