import { connect } from 'react-redux';
import AddTrackButton from './add_track_button';
import { addTrack } from '../../actions/playlist_actions';

const mapDispatchToProps = dispatch => ({
  addTrack: (playlistId, track) => dispatch(addTrack(playlistId, track))
});

export default connect(null, mapDispatchToProps)(AddTrackButton);
