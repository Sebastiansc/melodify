import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser.id),
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: guest => dispatch(login(guest))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SessionForm);
