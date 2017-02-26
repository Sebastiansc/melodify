import { connect } from 'react-redux';
import Collection from './collection';
import { nowPlaying } from '../../actions/playing_actions';

const mapStateToProps = ({likes, plays}, {collection}) => {
  let tracks;
  switch (collection) {
    case "likes":
      tracks = likes;
      break;
    case "plays":
      tracks = plays;
      break;
  }
  return {
    tracks
  };
};

const mapDispatchToProps = dispatch => ({
  nowPlaying: (trackUrl, tracks) => dispatch(nowPlaying(trackUrl, tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
