import { connect } from 'react-redux';

import Nav from './Nav';

const mapStateToProps = store => ({
  user: store.SignInReducer.get('user'),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);