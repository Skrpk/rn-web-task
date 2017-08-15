import { connect } from 'react-redux';

import Music from './Music';
import SignInActions from '../../Actions/SignInActions';
import ProfileActions from '../../Actions/ProfileActions';

const mapStateToProps = store => ({
  tracksObject: store.MusicReducer.get('tracks'),
});

const mapDispatchToProps = dispatch => ({
  logUserOut: () => {
    dispatch(ProfileActions.resetProfile());
    dispatch(SignInActions.logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Music);
