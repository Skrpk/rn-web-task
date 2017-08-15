import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store';

import SignUp from './components/SignUp/SignUpContainer';
import SignIn from './components/SignIn/SignInContainer';
import MainPage from './components/MainPage/MainPageContainer';
import Music from './components/Music/MusicContainer';
import Profile from './components/Profile/ProfileContainer';
import App from './components/App/AppContainer';

const app = document.getElementById('app');


ReactDOM.render(<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SignIn} />
      <Route path="sign-up" component={SignUp} />
      <Route path="main" component={MainPage}>
        <IndexRoute component={Music} />
        <Route path="profile" component={Profile} />
      </Route>
    </Route>
  </Router>
</Provider>
  , app);
