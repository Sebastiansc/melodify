  import { connect } from 'react-redux';
import History from './history';
import { getRecentLikes } from '../../actions/liked_tracks_actions';
import { getRecentPlays } from '../../actions/listen_history_actions';
import { toArray } from '../../reducers/selectors';
import { nowPlaying } from '../../actions/playing_actions';

const mapStateToProps = (store, {collection}) => ({
  tracks: store[collection],
  disabled: Boolean(store[collection][0] === "empty"),
  loggedIn: Boolean(store["session"].currentUser.id)
});

const mapDispatchToProps = (dispatch, {collection}) => {
  let getTracks;
  if (collection === 'likes') {
    getTracks = getRecentLikes;
  } else {
    getTracks = getRecentPlays;
  }
  return {
  getTracks: () => dispatch(getTracks()),
  nowPlaying: (songId, tracks) => dispatch(nowPlaying(songId, tracks))
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (History);
