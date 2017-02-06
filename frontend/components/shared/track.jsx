import React from 'react';
import { Link } from 'react-router';
export default class Track extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className={`track ${this.props.klass}`}>
        <div
          className='track-artwork'
          style={{backgroundImage: `url('${this.props.track.cover_photo}')`}}>
          <div className='artwork-shade'></div>
          <div className='play-overlay'>
            <button className='play-button'> </button>
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
