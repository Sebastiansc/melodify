import { connect } from 'react-redux';
import Player from './player';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = ({playing}) => ({
  playing
});

export default connect(mapStateToProps)(Player);
