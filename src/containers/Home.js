import { connect } from 'react-redux';
import Home from '../components/Home';
import state from '../redux/state';

const mapStateToProps = () => {
  return {
    cars: state.cars
  }
};

export default connect(mapStateToProps)(Home);