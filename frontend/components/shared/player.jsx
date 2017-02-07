import React from 'react';
import ReactPlayer from 'react-player';

const style = {
  width: "100%",
  height: "auto"
};

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

  resumePlaying() {
    if (!this.props.playing.state) this.props.play();
  }

  render(){
    // A song has been selected
    if (this.props.playing.songId) {
      return(
        <ReactPlayer
          url={this.findSong()}
          playing={this.props.playing.state}
          controls={false}
          className="player"
          height={0}
          width={"100%"}
          onPlay={() => this.resumePlaying()}
          onPause={() => this.props.pause()}/>
      );
    } else {
      return <div></div>;
    }
  }
}
