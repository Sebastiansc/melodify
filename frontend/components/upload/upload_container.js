import { connect } from 'react-redux';
import { createSong } from '../../actions/song_actions';
import Upload from './upload';

const mapStateToProps = ({session}) => ({
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createSong: song => dispatch(createSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
