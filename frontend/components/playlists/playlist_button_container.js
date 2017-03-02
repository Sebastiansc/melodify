import { connect } from 'react-redux';
import PlaylistButton from './playlist_button';
import { toggleModal } from '../../actions/playlist_actions';
import {
  toggleModal as toggleSessionModal
} from '../../actions/session_actions';

const mapStateToProps = ({ session, playlists }) => ({
  loggedIn: Boolean(session.currentUser.id),
});

const mapDispatchToProps = dispatch => ({
  toggleModal: track => dispatch(toggleModal(track)),
  toggleSessionModal: () => dispatch(toggleSessionModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistButton);
