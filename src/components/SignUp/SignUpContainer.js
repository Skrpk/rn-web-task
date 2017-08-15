import { connect } from 'react-redux';

import SignUp from './SignUp';
import SignUpActions from '../../Actions/SignUpActions';
import MainPageAction from '../../Actions/MusicActions';

const mapStateToProps = store => (
  {
    login: store.SignUpReducer.get('login'),
    password: store.SignUpReducer.get('password'),
    email: store.SignUpReducer.get('email'),
    user: store.SignUpReducer.get('user'),
    error: store.SignUpReducer.get('error'),
});

const mapDispatchToProps = dispatch => ({
  editProfileForm: (name, value) =>
    dispatch(SignUpActions.editProfileForm(name, value)),
  register: (login, email, password) => {
    dispatch(MainPageAction.initMainPage());
    dispatch(SignUpActions.registerUser(login, email, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
