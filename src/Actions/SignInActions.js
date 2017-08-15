import { browserHistory } from 'react-router';

import constant from '../constants/SignInConstants';
import MusicAction from './MusicActions';


function editProfileForm(name, value) {
  return {
    type: constant.EDIT_SIGN_IN_FORM,
    name,
    value,
  };
}

const authorizeUser = (login, password) => (dispatch) => {
  if (!login || !password) {
    const error = {};

    error.message = login ? 'Invalid password.' : 'Invalid login.';

    dispatch({ type: constant.AUTHORIZATION_ERROR, error });
    return;
  }

  Backendless.UserService.login(
    login,
    password,
    true,
    new Backendless.Async(
      (user) => {
        browserHistory.push('/main');
        dispatch({ type: constant.AUTHORIZE_USER, user });
        dispatch(MusicAction.initMainPage());
      },
      error => dispatch({ type: constant.AUTHORIZATION_ERROR, error }),
    ));
};

const getUserFromStorage = () => (dispatch) => {
  Backendless.UserService.getCurrentUser(
    new Backendless.Async(
      (user) => {
        dispatch({ type: constant.UPLOAD_USER_FROM_LOCAL_STORAGE, user });
        dispatch(MusicAction.initMainPage());
      },
    ),
  );
};

const removeError = () => ({ type: constant.REMOVE_ERROR });

const updateUser = (login, email, password, user) => (dispatch) => {
  user.name = login ? login : user.name;
  user.email = email ? email : user.email;
  user.password = password ? password : user.password;

  Backendless.UserService.update(
    user,
    new Backendless.Async(
      receivedUser => (dispatch({ type: constant.UPDATE_USER, user: receivedUser })),
    ),
  );
};

const logOut = () => (dispatch) => {
  browserHistory.push('/');
  Backendless.UserService.logout(
    new Backendless.Async(
      () => dispatch({ type: constant.LOG_OUT }),
    ),
  );
}

export default {
  editProfileForm,
  authorizeUser,
  removeError,
  logOut,
  updateUser,
  getUserFromStorage,
};
