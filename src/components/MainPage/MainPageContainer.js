import { connect } from 'react-redux';

import MainPage from './MainPage';

const mapStateToProps = store => (
  {
    tracks: store.MusicReducer.get('tracks'),
  });

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
