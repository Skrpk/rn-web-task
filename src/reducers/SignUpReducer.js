import { Map } from 'immutable';

import constant from '../constants/SignUpConstants';

const initialState = Map({
  login: '',
  email: '',
  password: '',
  user: null,
  error: null,
  registered: false,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constant.EDIT_SIGN_UP_FORM: {
      return state
              .set(action.name, action.value);
    }
    case constant.REGISTER_USER: {
      return state
              .set('registered', true)
              .set('user', action.user);
    }
    case constant.REGISTER_FAILED: {
      return state
              .set('error', action.error);
    }
    default: {
      return state;
    }
  }
}
