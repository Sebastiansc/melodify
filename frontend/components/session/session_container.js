import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, toggleModal } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser.id),
  errors: session.errors,
  open: session.modal
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: guest => dispatch(login(guest)),
    signup: guest => dispatch(signup(guest)),
    closeModal: () => dispatch(toggleModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SessionForm);
