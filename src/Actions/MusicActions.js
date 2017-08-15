import { browserHistory } from 'react-router';

const initMainPage = () => (dispatch) => {

  Backendless.Files.listing(
    '/music',
    '*.mp3',
    false,
    null,
    null,
    new Backendless.Async(
      (songsObject) => {
        dispatch({ type: 'INIT_MAIN', data: songsObject.data });
        browserHistory.push('/main');
      }
    ),
  );
};

export default {
  initMainPage,
};
