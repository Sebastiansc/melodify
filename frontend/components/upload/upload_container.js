import { connect } from 'react-redux';
import Upload from './upload';

const mapStateToProps = ({session}) => ({
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
