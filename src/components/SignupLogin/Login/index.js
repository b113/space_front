import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Login extends Component {
  static propTypes = {
    loginUserName: PropTypes.string,
    loginPassword: PropTypes.string,
  }

  state = {
    loginUserName: '',
    loginPassword: '',
  }

  handleSubmitLogin = (event) => {
    console.log(this.state);
    event.preventDefault();
    this.setState({ loginUserName: '', loginPassword: '' });
  }

  handleLoginUserName = (event) => {
    this.setState({ loginUserName: event.target.value, });
  }

  handleLoginPassword = (event) => {
    this.setState({ loginPassword: event.target.value, });
  }

  render() {
    const { loginUserName, loginPassword } = this.state;
    return (
      <form action="#" name="joinUsForm" className="login" method="post" onSubmit={this.handleSubmitLogin}>

        <label htmlFor="username" className="login__usernameLabel">Username</label>
        <input type="text" name="username" className="login__usernameInput" onChange={this.handleLoginUserName} value={loginUserName} autoComplete="username" />

        <label htmlFor="password" className="login__passwordLabel">Password</label>
        <input type="password" name="password" className="login__passwordInput" onChange={this.handleLoginPassword} value={loginPassword} autoComplete="password" />

        <input type="submit" value="Log in"
          className={`login__submitBtn ${(loginUserName && loginPassword) ? null : 'login__submitBtn--disabled'}`} disabled={!(loginUserName && loginPassword)} />
      </form>
    )
  }
}
