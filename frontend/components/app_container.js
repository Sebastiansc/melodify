import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = ({session}) => ({
  user: session.currentUser
});

export default connect(mapStateToProps)(App);
