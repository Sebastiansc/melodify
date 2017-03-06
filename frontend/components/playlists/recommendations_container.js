import { connect } from 'react-redux';
import Recommendations from './recommendations';

const mapStateToProps = ({ likes }) => ({
  tracks: likes
});

export default connect(
  mapStateToProps,
  null,
  null,
  { withRef: true})(Recommendations);
