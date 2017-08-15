import React from 'react';
import Nav from '../Nav/NavContainer';

import backendlessConstants from '../../constants/backendlessConstants';

const Backendless = require('backendless');

export default class App extends React.Component {
  componentWillMount() {
    Backendless.serverURL = 'https://api.backendless.com';
    Backendless.initApp(backendlessConstants.APPLICATION_ID,
      backendlessConstants.SECRET_KEY,
      backendlessConstants.VERSION);
  }

  render() {
    const { location } = this.props;

    return (
      <div>
        <Nav location={location} />
        {this.props.children}
      </div>
    );
  }
}
