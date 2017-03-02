import React from 'react';
import PlaylistItem from './playlist_item';

export default class PlaylistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playlists: props.playlists };
  }

  componentDidMount() {
    $('#input').focus();
  }

  filterPlaylists(query) {
    let playlists = [];
    this.props.playlists.forEach( playlist => {
      if (playlist.startsWith(query)) {
        playlists.push(playlist);
      }
    });
    return playlists;
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlists = this.filterPlaylists(e.target.value);
    this.setState({ playlists });
  }

  render() {
    if (!this.props.open) return null;
    return(
      <div className="playlist-list-wrapper">
        <form
          className='playlist-form'
          onSubmit={ e => this.handleSubmit(e)}>
          <input
            type='text'
            id='input'
            placeholder='Filter playlists'
            className='playlist-input'>
          </input>
        </form>
        <ul className='playlists-ul'>
          {this.state.playlists.map( playlist => (
            <PlaylistItem playlist={playlist}/>
          ))}
        </ul>
      </div>
    );
  }
}
