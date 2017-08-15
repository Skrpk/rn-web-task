import React from 'react';

import Button from '../Button/Button';

export default class Profile extends React.Component {

  validateEmail = () => {
    const value = this.props.email;
    if (!value || /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(value)) {
      this.emailInput.classList.remove('error-border');
      return true;
    } else {
      this.emailInput.classList.add('error-border');
      return false;
    }
  };

  submitProfile = (e) => {
    e.preventDefault();
    const { login, email, password, user } = this.props;

    if (this.validateEmail()) {
      this.props.submitChanges(login, email, password, user);
    }
  };

  render() {
    const { login, email, password } = this.props;

    return (
      <form className="form edit-profile-form">
        <label htmlFor="">
          Your login is '{this.props.user.name}'
          <input
            className="form-control"
            value={login}
            placeholder="Enter new login"
            ref={(loginInput) => { this.loginInput = loginInput; }}
            onChange={e => this.props.editInput('login', e.target.value)}
          />
        </label>
        <label htmlFor="">
          Your email is '{this.props.user.email}'
          <input
            className="form-control"
            value={email}
            placeholder="Enter new email"
            ref={(emailInput) => { this.emailInput = emailInput; }}
            onChange={e => this.props.editInput('email', e.target.value)}
          />
        </label>
        <input
          className="form-control"
          value={password}
          placeholder="Enter new password"
          ref={(passwordInput) => { this.passwordInput = passwordInput; }}
          type="password"
          onChange={e => this.props.editInput('password', e.target.value)} />
        <Button
          listener={this.submitProfile}
          className="btn btn-success"
          title="Confirm!"
        />
      </form>);
  }
}
