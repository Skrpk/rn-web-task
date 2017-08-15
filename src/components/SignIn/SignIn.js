import React from 'react';
import { browserHistory } from 'react-router';
import Button from '../Button/Button';

export default class SignIn extends React.Component {

  componentDidMount() {
    const stayLoggedIn = JSON.parse(localStorage.getItem('Backendless')).stayLoggedIn;
    if (stayLoggedIn && !this.props.authorized) {
      this.props.loadFromStorage();
    }
  };

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
    e.preventDefault();

    if (this.validateLogin() & this.validatePassword()) {
      this.props.authorize(this.login, this.password);

    }
  };

  editInput = (inputName, inputText) => {
    this.props.editProfileForm(inputName, inputText);
    if (this.props.error) {
      this.props.removeError();
    }
  };

  render() {
    const { login, password, error, user } = this.props;
    let errorSpan = null;
    if (error) {
      errorSpan = <span className="alert alert-danger message">{error.message}</span>;
    }

    return (
      <form className="form">
        {errorSpan}
        <input
          className="form-control"
          value={login}
          placeholder="Enter your login"
          ref={(login) => { this.loginInput = login; }}
          onChange={e => this.editInput('login', e.target.value)}
        />
        <input
          className="form-control"
          value={password}
          placeholder="Enter your password"
          ref={(password) => { this.passwordInput = password; }}
          type="password"
          onChange={e => this.editInput('password', e.target.value)} />
        <Button
          listener={this.submitListener}
          className="btn btn-success"
          title="Sign In!"
        />
      </form>);
  }
}
