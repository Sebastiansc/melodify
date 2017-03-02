import React from 'react';
import Modal from 'react-modal';
import PlaylistList from './playlist_list';
import PlaylistCreate from './playlist_create';
import merge from 'lodash/merge';

export default class PlaylistModal extends React.Component {
  constructor() {
    super();
    this.state = { open: false, addView: true, createView: false };
  }

  componentWillReceiveProps(props) {
    if (this.state.open !== props.open) {
      this.setState({ open: props.open });
    }
  }

  closeModal() {
    this.props.toggleModal();
    this.setState({ open: false });
  }

  highlight(ref) {
    $('.playlist-headers span').removeClass('active');
    $(this.refs[ref]).addClass('active');
  }

  open(ref) {
    this.highlight(ref);
    // Create copy of state
    const newState = merge({}, this.state);
    // close the old display open the new one
    for (let key in newState) {
      if (key === 'open') continue;
      newState[key] = false;
      if (key.startsWith(ref)) newState[key] = true;
    }
    this.setState(newState);
  }

  render() {
    window.that = this;
    return(
      <Modal
        isOpen={this.state.open}
        onRequestClose={() => this.closeModal()}
        contentLabel="Example Modal"
        className={
          `react-modal
           center-block
           animated fadeInDownBig
           playlist-modal`
        }
        overlayClassName='react-modal-overlay playlist-modal-overlay'
        >
        <div className='playlist-headers-wrapper'>
          <ul className='playlist-headers'>
            <li
              onClick={e => this.open('add')} >
              <span ref='add' className='active'>Add to playlist</span>
            </li>
            <li onClick={e => this.open('create')}>
              <span ref='create'>Create a playlist</span>
            </li>
          </ul>
        </div>
        <div className='playlist-modal-main-content'>
          <PlaylistList
            open={this.state.addView}
            playlists={this.props.playlists}/>
          <PlaylistCreate
            open={this.state.createView}
            createPlaylist={this.props.createView}/>
        </div>
      </Modal>
    );
  }
}
