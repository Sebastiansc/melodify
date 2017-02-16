import { connect } from 'react-redux';
import LikeHistory from './like_history';
import { getRecentLikes } from '../../actions/liked_tracks_actions';
import { toArray } from '../../reducers/selectors';
import { nowPlaying } from '../../actions/playing_actions';

const mapStateToProps = ({likes}) => ({
  likes: toArray(likes)
});

const mapDispatchToProps = dispatch => ({
  getLikes: () => dispatch(getRecentLikes()),
  nowPlaying: (songId, tracks) => dispatch(nowPlaying(songId, tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeHistory);
