import React from 'react';
import PlaylistItem from './playlist_item';

export default class PlaylistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playlists: [] };
  }

  componentDidMount() {
    $(this.refs.input).focus();
  }

  filterPlaylists(query) {
    let playlists = [];
    this.props.playlists.forEach( playlist => {
      if (playlist.name.startsWith(query)) {
        playlists.push(playlist);
      }
    });
    return playlists;
  }

  componentWillReceiveProps(props) {
    if (!this.state.playlists.length) {
      this.setState({ playlists: props.playlists });
    }
  }

  search(e) {
    e.preventDefault();
    const playlists = this.filterPlaylists(e.target.value);
    this.setState({ playlists });
  }

  blurField(e) {
    e.preventDefault();
    $(this.refs.input).blur();
  }

  render() {
    if (!this.props.open) return null;
    return(
      <div className="playlist-list-wrapper">
        <form onSubmit={e => this.blurField(e)}>
          <input
            type='text'
            ref='input'
            onChange={e => this.search(e)}
            placeholder='Filter playlists'
            className='playlist-input'>
          </input>
        </form>
        <ul className='playlists-ul'>
          {this.state.playlists.map( playlist => (
            <PlaylistItem
              closeModal={this.props.closeModal}
              playlist={playlist}
              track={this.props.track}
              key={playlist.id}/>
          ))}
        </ul>
      </div>
    );
  }
}
