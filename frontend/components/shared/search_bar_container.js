import { connect } from 'react-redux';
import SearchBar from './search_bar';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
