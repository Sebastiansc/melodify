import React from 'react';
import Masonry from 'react-masonry-component';
import SoundItemContainer from '../sound_item/sound_item_container';

export default class Trending extends React.Component {
  constructor(props){
    super(props);
  }

  play(trackUrl) {
    this.props.nowPlaying(trackUrl, this.props.tracks);
  }

  render(){
    return(
      <ul className='trending'>
        {this.props.tracks.slice(0, 12).map((track, idx) => (
            <TrackContainer track={track} key={track.id}
                            klass='trending-item'
                            play={trackUrl => this.play(trackUrl)}/>)
          )}
      </ul>
    );
  }
}
