import { connect } from 'react-redux';
import Trending from './trending';
import { nowPlaying } from '../../actions/playing_actions';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = ({tracks}) => ({
  tracks: toArray(tracks)
});

const mapDispatchToProps = dispatch => ({
  nowPlaying: (songId, tracks) => dispatch(nowPlaying(songId, tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
