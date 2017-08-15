import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const navClass = collapsed ? 'collapse' : '';
    let navigationList;

    if (this.props.user) {
      navigationList = (
        <ul className="nav navbar-nav">
          <li>
            <Link to="main" onClick={this.toggleCollapse}>Main</Link>
          </li>
        </ul>);
    } else {
      navigationList = (
        <ul className="nav navbar-nav">
          <li>
            <IndexLink to="/" onClick={this.toggleCollapse}>Sign In</IndexLink>
          </li>
          <li>
            <Link to="sign-up" onClick={this.toggleCollapse}>Sign Up</Link>
          </li>
        </ul>);
    }

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className={'navbar-collapse ' + navClass} id="bs-example-navbar-collapse-1">
            {navigationList}
          </div>
        </div>
      </nav>
    );
  }
}
