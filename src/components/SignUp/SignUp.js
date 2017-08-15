import React from 'react';

import Button from '../Button/Button';

export default class SignUp extends React.Component {
  validateLogin = () => {
    if (this.loginInput.value) {
      this.loginInput.classList.remove('error-border');
      this.login = this.loginInput.value;
      return true;
    } else {
      this.loginInput.classList.add('error-border');
      return false;
    }
  };

  validateEmail = () => {
    const value = this.emailInput.value;
    if (value !== '' || /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(value)) {
      this.emailInput.classList.remove('error-border');
      this.email = this.emailInput.value;
      return true;
    } else {
      this.emailInput.classList.add('error-border');
      return false;
    }
  };

  validatePassword = () => {
    if (this.passwordInput.value) {
      this.passwordInput.classList.remove('error-border');
      this.password = this.passwordInput.value;
      return true;
    } else {
      this.passwordInput.classList.add('error-border');
      return false;
    }
  };

  submitListener = (e) => {
    const { login, email, password } = this.props;
    e.preventDefault();
    if (this.validateEmail()
      & this.validateLogin()
      & this.validatePassword()) {
      this.props.register(login, email, password);
    }
  };

  render() {
    const { login, password, email, error, user } = this.props;

    let errorSpan = null;
    let userSpan = null;
    if (error) {
      errorSpan = <span className="alert alert-danger message">{error.message}</span>;
    }

    if (user) {
      userSpan = <span className="alert alert-success message">{user.email}</span>;
    }

    return (
      <form className="form">
        {errorSpan}
        {userSpan}
        <input
          className="form-control"
          value={login}
          placeholder="Enter your login"
          ref={(login) => { this.loginInput = login; }}
          onChange={e => this.props.editProfileForm('login', e.target.value)}
        />
        <input
          className="form-control"
          value={email}
          placeholder="Enter your email"
          ref={(email) => { this.emailInput = email; }}
          onChange={e => this.props.editProfileForm('email', e.target.value)}
        />
        <input
          className="form-control"
          value={password}
          placeholder="Enter your password"
          ref={(password) => { this.passwordInput = password; }}
          type="password"
          onChange={e => this.props.editProfileForm('password', e.target.value)} />
        <Button
          listener={this.submitListener}
          className="btn btn-success"
          title="Sign Up!"/>
      </form>);
  }
}
