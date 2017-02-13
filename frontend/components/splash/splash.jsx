import { connect } from 'react-redux';
import Splash from './_splash';

const mapStateToProps = ({session}) => {
  return {
    loggedIn: Boolean(session.currentUser.id)
  };
};

export default connect(mapStateToProps)(Splash);
