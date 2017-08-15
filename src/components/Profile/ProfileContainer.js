import { connect } from 'react-redux';

import Profile from './Profile';
import ProfileActions from '../../Actions/ProfileActions';
import SignInActions from '../../Actions/SignInActions';

const mapStateToProps = store => ({
  login: store.ProfileReducer.get('login'),
  email: store.ProfileReducer.get('email'),
  password: store.ProfileReducer.get('password'),
  user: store.SignInReducer.get('user'),
});

const mapDispatchToProps = dispatch => ({
  editInput: (name, value) =>
    dispatch(ProfileActions.editProfileInput(name, value)),
  submitChanges: (login, email, password, user) =>
    dispatch(SignInActions.updateUser(login, email, password, user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
