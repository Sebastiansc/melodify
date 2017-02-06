import { connect } from 'react-redux';
import Trending from './trending';
import { getSongs } from '../actions/song_actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getSongs: () => dispatch(getSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending);
