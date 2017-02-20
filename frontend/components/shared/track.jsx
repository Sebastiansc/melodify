// Needs a play method to be passed from its parent component.
// Play method should dispatch nowPlaying with the parents track collection and this tracks trackId.

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

  togglePlay(e) {
    // Avoid click event being passed on to the current
    // element rendering Track and causing play to be called
    // twice
    e.stopPropagation();
    // Add playing backgroung to chart item
    $('.chart-track').removeClass('chart-track-playing');
    $(`#${this.props.track.id}`).addClass('chart-track-playing');

    if (this.props.state && this._isSelected()) {
      this.props.pause();
    } else {
      this.props.play(this.props.track.id);
    }
  }

  getBackground() {
    if (this.props.track.id) {
      return `url('${this.props.track.cover_photo}')`;
    } else {
      return 'linear-gradient(135deg,#e6846e,#846170)';
    }
  }

  redirect(e) {
    e.stopPropagation(e);
  }

  render(){
    return(
      <li className={`track ${this.props.klass}`}>
        <div
          className='track-artwork'
          style={{backgroundImage: this.getBackground()}}
        >

          <div className='artwork-shade'></div>
          <div className={`play-overlay ${this.playState()}`}>
            <button className={`play-button `}
                    onClick={e => this.togglePlay(e)}>
            </button>
          </div>

          <div className='track-actions'>
            <LikeContainer
              track={this.props.track}
              likedClass='like'
              unlikedClass='like'/>
            <button className='more'></button>
          </div>

        </div>
        <div className='track-text-info'>
          <div className='track-title'>
            <Link
              to={`${this.props.track.ownerUrl}/${this.props.track.id}`}
              onClick={e => this.redirect( e)}>
              {this.props.track.title}
            </Link>
          </div>
          <div className='artist-name'>
            <Link
              to={`${this.props.track.owner}`}
              onClick={e => this.redirect(e)}>
              {this.props.track.artist}
            </Link>
          </div>
          <div className='like-track-actions-wrapper'>
            <ul className='like-track-actions'>
              <li className='chart-item-plays'>
                {this.props.track.timesPlayed}k
              </li>
              <li className='gray-heart mini-heart'>
                <Link to="artist/track/likes">128k</Link>
              </li>
              <li className='comments-bubble'>
                <Link to='artist/track'>907</Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    );
  }
}
