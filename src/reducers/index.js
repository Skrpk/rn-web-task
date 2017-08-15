import { combineReducers } from 'redux';

import SignUpReducer from './SignUpReducer';
import SignInReducer from './SignInReducer';
import MusicReducer from './MusicReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
  SignUpReducer,
  SignInReducer,
  MusicReducer,
  ProfileReducer,
});
