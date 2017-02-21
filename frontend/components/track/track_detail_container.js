import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { nowPlaying } from '../../actions/playing_actions';

const mapStateToProps = ({song}) => ({
  track: song
});

const mapDispatchToProps = dispatch => ({
  nowPlaying: (songId, tracks) => dispatch(nowPlaying(songId, tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail);
