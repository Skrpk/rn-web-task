import { Map } from 'immutable';

import constant from '../constants/SignInConstants';

const initialState = Map({
  login: '',
  password: '',
  user: null,
  error: null,
  authorized: false,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constant.EDIT_SIGN_IN_FORM: {
      return state
              .set(action.name, action.value);
    }
    case constant.AUTHORIZE_USER: {
      return state
              .set('authorized', true)
              .set('user', action.user);
    }
    case constant.AUTHORIZATION_ERROR: {
      return state
              .set('error', action.error);
    }
    case constant.REMOVE_ERROR: {
      return state
              .set('error', null);
    }
    case constant.UPDATE_USER: {
      return state
              .set('user', action.user);
    }
    case constant.UPLOAD_USER_FROM_LOCAL_STORAGE: {
      return state
              .set('user', action.user)
              .set('authorized', true)
              .set('login', action.user.email);
    }
    case constant.LOG_OUT: {
      return state
              .set('user', null)
              .set('login', '')
              .set('password', '')
              .set('authorized', false);
    }
    default: {
      return state;
    }
  }
}
