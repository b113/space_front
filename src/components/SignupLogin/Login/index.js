import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {requstedLogin} from '../../../redux/actions/user/';

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    cancelCallback: PropTypes.func
  }

  state = {
    loginUserName: '',
    loginPassword: '',
  }

  handleSubmitLogin = (event) => {
    event.preventDefault();
    const {loginUserName, loginPassword} = this.state;
    const {dispatch, cancelCallback} = this.props;

    dispatch(requstedLogin({
      login : loginUserName, 
      password : loginPassword,
      cancelCallback
    }))

  }

  handleLoginUserName = (event) => {
    this.setState({ loginUserName: event.target.value, });
  }

  handleLoginPassword = (event) => {
    this.setState({ loginPassword: event.target.value, });
  }

  render() {
    const { loginUserName, loginPassword } = this.state;
    const {isErrorLogin, errorLoginMessage} = this.props
    const error = {border: '1px solid red'}
    return (
      <form action="#" name="joinUsForm" className="login" method="post" onSubmit={this.handleSubmitLogin}>

        <label htmlFor="username" className="login__usernameLabel">Username</label>
        <input type="text" name="username" className="login__usernameInput" onChange={this.handleLoginUserName} value={loginUserName} autoComplete="username" style={isErrorLogin ? error : {}} />

        <label htmlFor="password" className="login__passwordLabel">Password</label>
        <input type="password" name="password" className="login__passwordInput" onChange={this.handleLoginPassword} value={loginPassword} autoComplete="password" style={isErrorLogin ? error : {}} />

        <input type="submit" value="Log in"
          className={`login__submitBtn ${(loginUserName && loginPassword) ? null : 'login__submitBtn--disabled'}`} disabled={!(loginUserName && loginPassword)} />
        {isErrorLogin && <span className={{color: 'red'}}>{errorLoginMessage}</span> }
      </form>
    )
  }
}

export default connect(store => ({
  isErrorLogin : store.user.isErrorLogin,
  errorLoginMessage: store.user.errorLoginMessage
}),dispatch => ({dispatch}))(Login);
