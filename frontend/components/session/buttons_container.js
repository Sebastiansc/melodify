import { connect } from 'react-redux';
import SessionButtons from './buttons';
import { logout, toggleModal } from '../../actions/session_actions';

const mapStateToProps = ({session}) => {
  const loggedIn = Boolean(session.currentUser.id);
  return {
    loggedIn
  };
};

const mapDispatchToProps = dispatch => ({
  logout: redirect => dispatch(logout(redirect)),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);
