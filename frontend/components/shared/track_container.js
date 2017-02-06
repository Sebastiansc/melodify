import { connect } from 'react-redux';
import Track from './track';

const mapStateToProps = ({session}) => ({
  user: session.currentUser
});

export default connect(mapStateToProps)(Track);
