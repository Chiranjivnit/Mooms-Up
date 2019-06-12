import Signup from '../Components/Auth/Login/Signup';
import { connect } from 'react-redux';
import { fetchLogin } from '../Actions/LoginActions';

const mapStateToProps = state => {
  return {
    data: state.loginReducer.data,
    fetching: state.loginReducer.fetching,
    error: state.loginReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLogin: data => dispatch(fetchLogin(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);