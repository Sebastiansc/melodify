import React from 'react';
import { Link } from 'react-router';
export default class Track extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className={this.props.klass}>
        <span
          style={{backgroundImage: `url('${this.props.track.cover_photo}')`}}>
        </span>
        <Link className='track-title' to='#'>{this.props.track.title}</Link>
        <Link className='artist-name' to='#'>{this.props.track.artist}</Link>
      </li>
    );
  }
}
