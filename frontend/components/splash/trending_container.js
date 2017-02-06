import { connect } from 'react-redux';
import Trending from './trending';
import { getTracks } from '../../actions/tracks_actions';

const mapStateToProps = ({tracks}) => ({
  tracks
});

export default connect(mapStateToProps)(Trending);
