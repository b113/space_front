import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Signup extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (

      <form action="#" name="joinUsForm" className="login" method="post">

        <label htmlFor="username" className="login__usernameLabel">Username</label>
        <input type="text" name="username" className="login__usernameInput" />

        <label htmlFor="password" className="login__passwordLabel">Password</label>
        <input type="password" name="password" className="login__passwordInput" />

        <input type="submit" value="Log in" className="login__submitBtn" />
      </form>
    )
  }
}
