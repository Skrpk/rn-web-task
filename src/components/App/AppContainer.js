import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = store => ({
  user: store.SignInReducer.user,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
