// Needs a play method to be passed from its parent component.
// Play method should dispatch nowPlaying with the parents track collection and this tracks trackId.
import React from 'react';
import { Link } from 'react-router';
import LikeContainer from '../shared/like_container';
import PlaylistManager from './playlist_manager.js';
import TrackManager from './track_manager.js';

export default class SoundItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { background: '' };
    this.componentWillReceiveProps = this.componentWillMount = this.attachImage;
    this.manager = this.props.isPlaylist
                    ? new PlaylistManager(props.playlist)
                    : new TrackManager(props.track);
  }

  componentDidMount() {
  }

  _isSelected() {
    // songUrl is the url of the song playing application wide.
    return this.manager.currentTrack().url === this.props.songUrl;
  }

  playState() {
    const isPlaying = this.props.state;
    if (this._isSelected() && isPlaying) return 'playing';
  }

  togglePlay(e) {
    // Avoid click event being passed to the current
    // element rendering SounItem and causing play to be called
    // twice
    e.stopPropagation();

    if (this.props.state && this._isSelected()) {
      this.props.pause();
    } else {
      this.props.play(this.manager.currentTrack().url);
    }
  }

  redirect(e) {
    e.stopPropagation(e);
  }

  _setBackground(e) {
    // Check artwork to avoid setting state before the component has mounted.
    if (!this.artwork) return;
    this.setState({ background: `url('${e.target.src}')` });
    $('.bg').addClass('loaded');
  }

  attachImage(props = this.props) {
    // Avoid request to /undefined.
    if (props.track.id) {
      const image = new Image();
      image.src = props.track.cover_photo;
      image.onload = (e) => this._setBackground(e);
    }
  }

  renderActions() {
    return(
      <div className='track-actions'>
        <LikeContainer
          track={this.props.track}
          likedClass='like'
          unlikedClass='like'/>
        <button className='more'></button>
      </div>
    );
  }

  renderInteractionData() {
    return(
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
    );
  }

  renderTitle() {
    return(
      <div className='track-title'>
        <span className='track-title-wrap'>
          <Link
            className='track-title-text'
            to={`${this.props.track.ownerUrl}/${this.props.track.url}`}
            onClick={e => this.redirect( e)}>
            {this.props.track.title}
          </Link>
        </span>
      </div>
    );
  }

  renderArtistName() {
    return(
      <div className='artist-name'>
        <Link
          to={`${this.props.track.owner}`}
          onClick={e => this.redirect(e)}>
          {this.props.track.artist}
        </Link>
      </div>
    );
  }


  render(){
    return(
      <li className={`track ${this.props.klass}`}>
        <div className='track-artwork default-bg'>

          <Link
            to={`${this.props.track.ownerUrl}/${this.props.track.url}`}
            className='track-link'/>
          <span
            className='track-artwork-cover bg smooth-show'
            style={{backgroundImage: this.state.background}}
            ref={artwork => { this.artwork = artwork; }}>
          </span>
          <div className='artwork-shade'></div>
          <div className={`play-overlay ${this.playState()}`}>
            <button className={`play-button `}
                    onClick={e => this.togglePlay(e)}>
            </button>
          </div>

          {this.renderActions()}
        </div>

        <div className='track-text-info'>
          {this.renderTitle()}
          {this.renderArtistName()}
          {this.renderInteractionData()}
        </div>

      </li>
    );
  }
}
