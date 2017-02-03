import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';



const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser.id),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname === "/signup" ? "Sign up" : "Sign in";
  const processForm = (formType === 'Sign in') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    login: guest => dispatch(login(guest))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SessionForm);
