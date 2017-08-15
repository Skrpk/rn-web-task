import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        <ul className="sidebar-brand">
          <li>
            <IndexLink to="/main">Music</IndexLink>
          </li>
          <li>
            <Link to="/main/profile">Profile</Link>
          </li>
        </ul>
      </div>
    );
  }
}
