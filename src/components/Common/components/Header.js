import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux';

class Header extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    categories : PropTypes.object
  }
  

  render() {
    return (
      <div className='header'>
        
      </div>
    )
  }
}
export default connect(    
    store => ({
        categories : store.categories
    }),
    dispatch => ({dispatch})
)(Header)
