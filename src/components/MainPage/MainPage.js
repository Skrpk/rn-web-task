import React from 'react';
import { browserHistory } from 'react-router';

import Sidebar from '../Sidebar/Sidebar';

export default class MainPage extends React.Component {
  componentWillMount() {
    if (!this.props.tracks[0]) {
      browserHistory.push('/');
    }
  }

  render() {
    if (!this.props.tracks[0]) {
      return null;
    }

    return (
      <div className="main-page">
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
}
