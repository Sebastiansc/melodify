import { connect } from 'react-redux';
import TopTracks from './top_tracks';
import { getTracks } from '../../actions/tracks_actions';
import { toArray } from '../../reducers/selectors';
import { nowPlaying } from '../../actions/playing_actions';

const mapStateToProps = ({tracks, playing}) => ({
  tracks: toArray(tracks),
  playing
});

const mapDispatchToProps = dispatch => ({
  nowPlaying: (songUrl, tracks) => dispatch(nowPlaying(songUrl, tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTracks);
