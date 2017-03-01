import { connect } from 'react-router';
import PlaylistModal from './playlist_modal';
import { createPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = ({playlists}) => ({
  playlists
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: (playlist, tracks) => dispatch(createPlaylist(playlist, tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistModal);
