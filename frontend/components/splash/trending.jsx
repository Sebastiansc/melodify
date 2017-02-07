import React from 'react';
import Masonry from 'react-masonry-component';
import TrackContainer from '../shared/track_container';

export default class Trending extends React.Component {
  constructor(props){
    super(props);
  }

  play(songId) {
    this.props.nowPlaying(songId, this.props.tracks);
  }

  render(){
    return(
      <ul className='trending'>
        {this.props.tracks.slice(0, 12).map((track, idx) => (
            <TrackContainer track={track} key={track.id}
                            klass='trending-item'
                            play={songId => this.play(songId)}/>)
          )}
      </ul>
    );
  }
}
