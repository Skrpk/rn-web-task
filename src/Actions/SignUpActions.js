import { browserHistory } from 'react-router';

import constant from '../constants/SignUpConstants';
import signInConstant from '../constants/SignInConstants';

function editProfileForm(name, value) {
  return {
    type: constant.EDIT_SIGN_UP_FORM,
    name,
    value,
  };
}

const registerUser = (login, email, password) => (dispatch) => {
  const userObject = new Backendless.User();

  userObject.name = login;
  userObject.email = email;
  userObject.password = password;

  Backendless.UserService.register(
    userObject,
    new Backendless.Async(
      (user) => {
        browserHistory.push('/main');
        dispatch({ type: signInConstant.AUTHORIZE_USER, user });
        dispatch({ type: constant.REGISTER_USER, user });
      },
      error => dispatch({ type: constant.REGISTER_FAILED, error }),
    ));
};

export default {
  editProfileForm,
  registerUser,
};
