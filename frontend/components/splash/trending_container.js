import { connect } from 'react-redux';
import Trending from './trending';
import { getTracks } from '../actions/tracks_actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getTracks: () => dispatch(getTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending);
