import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Signup extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="signIn">
        <form action="#" name="signInForm" className="signInForm" method="post">
          <label htmlFor="username" className="signInForm__usernameLabel">E-mail</label>
          <input type="text" name="username" placeholder="Your e-mail" className="signInForm__usernameInput" />

          <label htmlFor="password" className="signInForm__passwordLabel">Password</label>
          <input type="password" name="password" placeholder="Your password" className="signInForm__passwordInput" />

          <input type="submit" value="Sign Up" className="signInForm__submitBtn" />
        </form>
      </div>
    )
  }
}
