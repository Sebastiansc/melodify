import { connect } from 'react-redux';
import PlaylistModal from './playlist_modal';
import { createPlaylist,
         toggleModal,
         getUserPlaylists } from '../../actions/playlist_actions';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = ({playlists}) => ({
  playlists: toArray(playlists.list),
  open: playlists.modal,
  track: playlists.track
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: (playlist, tracks) => (
    dispatch(createPlaylist(playlist, tracks))
  ),
  toggleModal: () => dispatch(toggleModal()),
  getUserPlaylists: () => dispatch(getUserPlaylists())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistModal);
