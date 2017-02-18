import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  user: session.currentUser
});

export default connect(mapStateToProps)(NavBar);
