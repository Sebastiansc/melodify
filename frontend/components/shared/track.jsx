// Needs a play method to be passed from its parent component. Play method
// should dispatch nowPlaying with the parents track collection.
import React from 'react';
import { Link } from 'react-router';
export default class Track extends React.Component {
  constructor(props){
    super(props);
    this.state = {playing: false};
  }

  playState() {
    const isSelected = this.props.track.id === this.props.songId;
    const isPlaying = this.props.state;
    if (isSelected && isPlaying) return 'playing';
  }

  render(){
    return(
      <li className={`track ${this.props.klass}`}>
        <div
          className='track-artwork'
          style={{backgroundImage: `url('${this.props.track.cover_photo}')`}}>
          <div className='artwork-shade'></div>
          <div className={`play-overlay ${this.playState()}`}>
            <button className={`play-button `}
                    onClick={() => this.props.play(this.props.track.id)}>
            </button>
          </div>
          <div className='track-actions'>
            <button className='like'></button>
            <button className='more'></button>
          </div>
        </div>
        <Link className='track-title' to='#'>{this.props.track.title}</Link>
        <Link className='artist-name' to='#'>{this.props.track.artist}</Link>
      </li>
    );
  }
}
