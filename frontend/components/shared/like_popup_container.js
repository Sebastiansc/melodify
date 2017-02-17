import { connect } from 'react-redux';
import LikePopup from './like_popup';

const mapStateToProps = ({popup}) => ({
  track: popup
});

export default connect(mapStateToProps)(LikePopup);
