import React from 'react';
import WavePlayerContainer from './wave_player_container';

export default class WavePlayer extends React.Component {
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
    }
  }

  componentWillReceiveProps(props) {
    this.loadAudio(props);
    
    // Sync with Player component through application state
    if (this._isPlaying(props)) {
      if (props.state) this.wavesurfer.play();
      if (!props.state) this.wavesurfer.pause();
    }
  }

  render() {
    return(
      <div className='wave-player-wrapper'>
        <div id="waveform"></div>
      </div>
    );
  }
}
