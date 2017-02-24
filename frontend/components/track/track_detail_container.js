import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { nowPlaying } from '../../actions/playing_actions';

const mapStateToProps = ({song}) => ({
  track: song
});

const mapDispatchToProps = dispatch => ({
  nowPlaying: (songUrl, tracks) => dispatch(nowPlaying(songUrl, tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail);
