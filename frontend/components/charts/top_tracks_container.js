import { connect } from 'react-redux';
import TopTracks from './top_tracks';
import { getTracks } from '../../actions/tracks_actions';
import { toArray } from '../../reducers/selectors';
import { nowPlaying } from '../../actions/playing_actions';

const mapStateToProps = ({tracks}) => ({
  tracks: toArray(tracks)
});

const mapDispatchToProps = dispatch => ({
  nowPlaying: (songId, tracks) => dispatch(nowPlaying(songId, tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTracks);
