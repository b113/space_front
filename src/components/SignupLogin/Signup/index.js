import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Signup extends Component {
  static propTypes = {
    signupUserName: PropTypes.string,
    signupPassword: PropTypes.string,
  }

  state = {
    signupUserName: '',
    signupPassword: '',
  }

  handleSubmitSignup = (event) => {
    console.log(this.state);
    event.preventDefault();
    this.setState({ signupUserName: '', signupPassword: '' });
  }

  handleSignupUserName = (event) => {
    this.setState({ signupUserName: event.target.value, });
  }

  handleSignupPassword = (event) => {
    this.setState({ signupPassword: event.target.value, });
  }

  render() {
    const { signupUserName, signupPassword } = this.state;
    return (
      <div className="signIn">
        <form action="#" name="signInForm" className="signInForm" method="post" onSubmit={this.handleSubmitSignup}>

          <label htmlFor="username" className="signInForm__usernameLabel">E-mail</label>
          <input type="text" name="username" placeholder="Your e-mail" className="signInForm__usernameInput" onChange={this.handleSignupUserName} value={signupUserName} autoComplete="username" />

          <label htmlFor="password" className="signInForm__passwordLabel">Password</label>
          <input type="password" name="password" placeholder="Your password" className="signInForm__passwordInput" onChange={this.handleSignupPassword} value={signupPassword} autoComplete="new-password" />

          <input type="submit" value="Sign Up" className={`signInForm__submitBtn ${(signupUserName && signupPassword) ? null : 'signInForm__submitBtn--disabled'}`} disabled={!(signupUserName && signupPassword)} />
        </form>
      </div>
    )
  }
}
