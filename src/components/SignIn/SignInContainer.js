import { connect } from 'react-redux';

import SignIn from './SignIn';
import SignInActions from '../../Actions/SignInActions';
import MusicActions from '../../Actions/MusicActions';

const mapStateToProps = store => (
  {
    login: store.SignInReducer.get('login'),
    password: store.SignInReducer.get('password'),
    error: store.SignInReducer.get('error'),
    user: store.SignInReducer.get('user'),
    authorized: store.SignInReducer.get('authorized'),
  });

const mapDispatchToProps = dispatch => ({
  editProfileForm: (name, value) =>
    dispatch(SignInActions.editProfileForm(name, value)),
  authorize: (login, password) => {
    dispatch(SignInActions.authorizeUser(login, password));
    dispatch(MusicActions.initMainPage());
  },
  loadFromStorage: () => {
    dispatch(SignInActions.getUserFromStorage());
  },
  removeError: () =>
    dispatch(SignInActions.removeError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
