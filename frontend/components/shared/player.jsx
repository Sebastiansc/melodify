import React from 'react';
import ReactPlayer from 'react-player';

export default class Player extends React.Component {
  constructor(props){
    super(props);
  }

  findSong(){
    const song = this.props.playing.tracks.filter(track => (
      track.id === this.props.playing.songId
    ));
    return song[0].audio_url;
  }

  render(){
    // A song has been selected
    if (this.props.playing.songId) {
      return(
        <ReactPlayer
          url={this.findSong()}
          playing={this.props.playing.state}
          controls={true}/>
      );
    } else {
      return <div></div>;
    }
  }
}
