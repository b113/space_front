import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Login from './Login'
import Signup from './Signup'

export default class SignupLogin extends Component {
  static propTypes = {
    mainTab: PropTypes.bool
  }

  state = {
    mainTab: true,
  }

  tabsHandler = (val) => {
    this.setState({ mainTab: val })
  }

  render() {
    const { mainTab } = this.state;
    return (
      <div className="modal-form">
        <nav className="nav-modal">
          <button onClick={() => this.tabsHandler(true)} className={`nav-modal__link ${mainTab ? 'nav-modal__link_active' : ''}`} >Login</button>
          <button onClick={() => this.tabsHandler(false)} className={`nav-modal__link ${!mainTab ? 'nav-modal__link_active' : ''}`}>Sign Up</button>
        </nav>
        {
          mainTab ? (
            <Login />
          ) : (
              <Signup />
            )
        }
      </div>
    )
  }
}

