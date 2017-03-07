import { connect } from 'react-redux';
import AddTrackButton from './add_track_button';
import { addTrack } from '../../actions/playlist_actions';

const mapDispatchToProps = dispatch => ({
  addTrack: (playlistId, trackId) => dispatch(addTrack(playlistId, trackId))
});

export default connect(null, mapDispatchToProps)(AddTrackButton);
