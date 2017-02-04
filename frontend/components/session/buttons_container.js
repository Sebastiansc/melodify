import { connect } from 'react-redux';
import SessionButtons from './buttons';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({session}) => {
  const loggedIn = Boolean(session.currentUser.id);
  return {
    loggedIn
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);
