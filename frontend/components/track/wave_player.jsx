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
      progressColor: '#f30',
      backend: 'MediaElement',
      barWidth: 2.5,
      height: 120,
      cursorColor: '#f78b56',
      hideScrollbar: true,
    });
    this.attachHandlers();
  }

  attachHandlers() {
    this.wavesurfer.setVolume(0);

    this.wavesurfer.on('seek', pos => this.positionChange(pos));

    this.wavesurfer.on('pause',  () => {
      $('#waveform').css('opacity', 0.8);
    });

    this.wavesurfer.on('play',  () => {
      if (!this.loaded) return;
      $('#waveform').css('opacity', 1);
    });

    this.wavesurfer.on('finish', () => {
      this.wavesurfer.pause();
      this.ignoreNextSeek = true;
      this.wavesurfer.seekTo(0);
    });
  }

  silentPlay(start, end) {
    // When using MediaElement backend play causes volume to reset to 1.
    if (start !== null && end !== null) {
      this.wavesurfer.play(start, end);
    } else {
      this.wavesurfer.play();
    }
    this.wavesurfer.setVolume(0);
  }

  positionChange(pos) {
    if (!this._isCurrentTrack()) {
      this.props.nowPlaying(this.props.track.url);
      this.silentPlay(0, this.wavesurfer.getDuration());
      return;
    }

    if (this.ignoreNextSeek) {
      this.ignoreNextSeek = false;
      return;
    }
    this.props.recordProgress(pos, 'wave');
  }

  loadAudio(props) {
    // Only load audio if it has not been loaded before and track is ready.
    if (!this.props.track.id && props.track.id) {
      this.wavesurfer.load(props.track.audio_url);
      this.wavesurfer.on('waveform-ready', () => this.ready());
    }
  }

  ready() {
    // Check if this.loaded to avoid calling this function more than once.
    if (this.loaded) return;
    this.loaded = true;

    // Show player.
    $('#waveform').addClass('waves-ready');

    // No need to sync if the song wasn't previously playing.
    if (!this.position) return;

    this.sync();
  }

  sync() {
    window.clearInterval(this.syncDelay);
    const duration = this.wavesurfer.getDuration();
    this.wavesurfer.seekTo(this.position + (this.delay / duration));
    this.togglePlay();
  }

  componentWillReceiveProps(props) {
    this.loadAudio(props);

    // Sync with Player component through application state
    if (this._isCurrentTrack(props)) {
      this.togglePlay(props);
      // New position was sent by Player component.
      if (props.position && props.updater === 'player') {
        this.ignoreNextSeek = true;
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
      // Cache position for when the waves finish rendering.
      this.position = props.position;
    }
    // Clear playing.progress in case component receives other new props.
    this.props.clearProgress();
  }

  togglePlay(props = this.props) {
    if (props.state) this.silentPlay();
    if (!props.state) this.wavesurfer.pause();
  }

  _isCurrentTrack(props = this.props) {
    return props.track.url === props.songUrl;
  }

  render() {
    return(
      <div className='wave-player-wrapper'>
        <div id="waveform" className='smooth-show'></div>
      </div>
    );
  }
}
