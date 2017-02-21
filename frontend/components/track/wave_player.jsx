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
  }

  _isPlaying(props) {
    return props.track.id === props.songId;
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
    this.wavesurfer.seekTo(this.position + (this.delay / duration));
    this.togglePlay();
  }

  componentWillReceiveProps(props) {
    this.loadAudio(props);

    // Sync with Player component through application state
    if (this._isPlaying(props)) {
      this.togglePlay(props);
      // Cache position for when the waves finish rendering.
      if (props.position) {
        this.seek(props);
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
      this.position = props.position;
      this.props.clearProgress();
    }
  }

  togglePlay(props = this.props) {
    if (props.state) this.wavesurfer.play();
    if (!props.state) this.wavesurfer.pause();
  }

  render() {
    return(
      <div className='wave-player-wrapper'>
        <div id="waveform"></div>
      </div>
    );
  }
}
