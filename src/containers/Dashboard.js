import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import state from '../redux/state';

const mapStateToProps = () => {
  return {
    cars: state.cars,
    user: state.user
  }
};

export default connect(mapStateToProps)(Dashboard);