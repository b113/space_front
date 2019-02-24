import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {requstedRegister} from '../../../redux/actions/user/';

class Signup extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    isErrorRegister: PropTypes.bool,
    errorRegisterMessage: PropTypes.string,
    cancelCallback: PropTypes.func
  }

  state = {
    signupUserName: '',
    signupPassword: '',
  }

  handleSubmitSignup = (event) => {
    event.preventDefault();
    const {signupUserName, signupPassword} = this.state;
    const {dispatch, cancelCallback} = this.props;
    dispatch(requstedRegister({
      login : signupUserName, 
      password : signupPassword,
      cancelCallback
    }))
  }

  handleSignupUserName = (event) => {
    this.setState({ signupUserName: event.target.value, });
  }

  handleSignupPassword = (event) => {
    this.setState({ signupPassword: event.target.value, });
  }

  render() {
    const { signupUserName, signupPassword } = this.state;
    const {isErrorRegister, errorRegisterMessage} = this.props;
    const error = {border: '1px solid red'}
    return (
      <div className="signIn">
        <form action="#" name="signInForm" className="signInForm" method="post" onSubmit={this.handleSubmitSignup}>

          <label htmlFor="username" className="signInForm__usernameLabel">E-mail</label>
          <input type="text" name="username" placeholder="Your e-mail" className="signInForm__usernameInput" onChange={this.handleSignupUserName} value={signupUserName} autoComplete="username" style={isErrorRegister ? error : {}} />

          <label htmlFor="password" className="signInForm__passwordLabel">Password</label>
          <input type="password" name="password" placeholder="Your password" className="signInForm__passwordInput" onChange={this.handleSignupPassword} value={signupPassword} autoComplete="new-password" style={isErrorRegister ? error : {}} />

          <input type="submit" value="Sign Up" className={`signInForm__submitBtn ${(signupUserName && signupPassword) ? null : 'signInForm__submitBtn--disabled'}`} disabled={!(signupUserName && signupPassword)} />
          {isErrorRegister && 
            <span style={{color: 'red'}}>{errorRegisterMessage}</span>
          }
        </form>
      </div>
    )
  }
}

export default connect(store => ({
  isErrorRegister : store.user.isErrorRegister,
  errorRegisterMessage: store.user.errorRegisterMessage
}),dispatch => ({dispatch}))(Signup);
