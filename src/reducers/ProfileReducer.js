import { Map } from 'immutable';

import constant from '../constants/ProfileConstants';

const initialState = Map({
  login: '',
  email: '',
  password: '',
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constant.EDIT_PROFILE_FIELD: {
      return state
              .set(action.name, action.value);
    }
    case constant.RESET_PROFILE: {
      return state
              .set('login', '')
              .set('email', '')
              .set('password', '');
    }
    default: return state;
  }
}
