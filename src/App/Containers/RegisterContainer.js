import Register from '../Components/Auth/Register/Register';
import { connect } from 'react-redux';
import { fetchRegister } from '../Actions/RegisterActions';

const mapStateToProps = state => {
  return {
    data: state.registerReducer.data,
    fetching: state.registerReducer.fetching,
    error: state.registerReducer.error
  };

}

const mapDispatchToProps = dispatch => {
  return {
    fetchRegister: data => dispatch(fetchRegister(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)