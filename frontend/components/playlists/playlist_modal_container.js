import { connect } from 'react-redux';
import PlaylistModal from './playlist_modal';
import { createPlaylist, toggleModal } from '../../actions/playlist_actions';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = ({playlists}) => ({
  playlists: toArray(playlists.list),
  open: playlists.modal
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: (playlist, tracks) => (
    dispatch(createPlaylist(playlist, tracks))
  ),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistModal);
