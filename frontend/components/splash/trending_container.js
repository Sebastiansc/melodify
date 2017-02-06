import { connect } from 'react-redux';
import Trending from './trending';
import { getTracks } from '../../actions/tracks_actions';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = ({tracks}) => ({
  tracks: toArray(tracks)
});

export default connect(mapStateToProps)(Trending);
