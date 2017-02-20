import { connect } from 'react-redux';
import TrackDetail from './track_detail';

const mapStateToProps = ({song}) => ({
  track: song
});

export default connect(mapStateToProps)(TrackDetail);
