// Needs a play method to be passed from its parent component. Play method
// should dispatch nowPlaying with the parents track collection.
import React from 'react';
import { Link } from 'react-router';
import LikeContainer from './like_container';

export default class Track extends React.Component {
  constructor(props){
    super(props);
  }

  _isSelected() {
    return this.props.track.id === this.props.songId;
  }

  playState() {
    const isPlaying = this.props.state;
    if (this._isSelected() && isPlaying) return 'playing';
  }

  togglePlay() {
    if (this.props.state && this._isSelected()) {
      this.props.pause();
    } else {
      this.props.play(this.props.track.id);
    }
  }

  render(){
    return(
      <li className={`track ${this.props.klass}`}>
        <div
          className='track-artwork'
          style={{backgroundImage: `url('${this.props.track.cover_photo}')`}}
        >

          <div className='artwork-shade'></div>
          <div className={`play-overlay ${this.playState()}`}>
            <button className={`play-button `}
                    onClick={() => this.togglePlay()}>
            </button>
          </div>

          <div className='track-actions'>
            <LikeContainer
              songId={this.props.track.id}
              likedClass='like'
              unlikedClass='like'/>
            <button className='more'></button>
          </div>

        </div>
        <div className='track-text-info'>
          <Link className='track-title' to='#'>{this.props.track.title}</Link>
          <Link className='artist-name' to='#'>{this.props.track.artist}</Link>
        </div>
      </li>
    );
  }
}
