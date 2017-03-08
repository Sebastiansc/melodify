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
      // Request playlists every time the modal opens.
      this.props.getUserPlaylists();
      // Animate after state has successfully updated or it wont show.
      this.setState({ open: props.open }, () => (
        $('.playlist-modal').animateCss('fadeInDownBig')
      ));
    }
  }

  closeModal() {
    // Transition opacity of overlay.
    $('.playlist-modal-overlay').addClass('overlay-hid');
    $('.playlist-modal').animateCss('fadeOutUpBig', () => {
      this.props.toggleModal();
      this.setState({ open: false, addView: true, createView: false });
    });
  }

  highlight(ref) {
    $('.playlist-headers span').removeClass('active');
    $(this.refs[ref]).addClass('active');
  }

  openView(ref) {
    this.highlight(ref);
    // Create copy of state
    const newState = merge({}, this.state);
    // Close the old display and open the new one
    for (let key in newState) {
      if (key === 'open') continue;
      newState[key] = false;
      if (key.startsWith(ref)) newState[key] = true;
    }
    this.setState(newState);
  }

  renderHeaders() {
    return(
      <div className='playlist-headers-wrapper'>
        <ul className='playlist-headers'>
          <li
            onClick={e => this.openView('add')} >
            <span ref='add' className='active'>Add to playlist</span>
          </li>
          <li onClick={e => this.openView('create')}>
            <span ref='create'>Create a playlist</span>
          </li>
        </ul>
      </div>
    );
  }

  renderViews() {
    return(
      <div className='playlist-modal-main-content'>
        <PlaylistList
          open={this.state.addView}
          closeModal={() => this.closeModal()}
          playlists={this.props.playlists}
          track={this.props.track}/>
        <PlaylistCreate
          open={this.state.createView}
          closeModal={() => this.closeModal()}
          createPlaylist={this.props.createPlaylist}
          playlists={this.props.playlists}
          track={this.props.track}/>
      </div>
    );
  }

  render() {
    return(
      <Modal
        isOpen={this.state.open}
        onRequestClose={() => this.closeModal()}
        contentLabel="Example Modal"
        className={
          `react-modal
           center-block
           playlist-modal`
        }
        overlayClassName='react-modal-overlay playlist-modal-overlay shown'
      >
        {this.renderHeaders()}
        {this.renderViews()}
      </Modal>
    );
  }
}
