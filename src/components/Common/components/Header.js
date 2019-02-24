import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import {fetchCategories, mobileMenuHandle,} from '../../../redux/actions/common/';
import Aside from './Aside';
import SignupLogin from '../../SignupLogin';
import Modal from "react-responsive-modal";
import {logout} from '../../../redux/actions/user';

class Header extends PureComponent {

  static propTypes = {
    dispatch: PropTypes.func,
    categories: PropTypes.object,
    isSuccessLogin: PropTypes.bool
  }

  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  mobileMenuHandle = () => {
    const {dispatch} = this.props;
    dispatch(mobileMenuHandle());
  }

  logoutHandle = () => {
    const {dispatch} = this.props;
    dispatch(logout());
  }

  render() {
    const { categories, isMobileMenuShow, isSuccessLogin } = this.props;
    const { open } = this.state;
    return (
      <div className='header'>
        <div className="container">
        <div className='header-nav'>
              <div className='logo'><Link to="/" >Space Project</Link></div>
              <div>
                <ul className='header-menu'>
                  <li>
                    Category
                    <ul className='sub-menu'>
                      {categories.data &&
                        categories.data.length > 0 &&
                        categories.data.map(el => <li key={uuid()}>
                          <Link to={`/category/${el}`}>{el}</Link>
                        </li>)
                      }
                    </ul>
                  </li>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                  <li>
                  {
                  !isSuccessLogin 
                    ? <Link onClick={this.onOpenModal} to="#">Sign Up/Sign In</Link> 
                    : <Link onClick={this.logoutHandle} to="#">Logout</Link>
                }
              </li>
                  
                </ul>
              
            
          </div>
          <button className="burger" onClick={this.mobileMenuHandle}>
            <span></span>
          </button>
        </div>
        {isMobileMenuShow && <Aside />}
        <Modal open={open} onClose={this.onCloseModal} center>
          <SignupLogin cancelCallback={this.onCloseModal} />
        </Modal>
      </div>
      </div>
    )
  }
}
export default connect(    
    store => ({
        categories : store.common.categories,
        isMobileMenuShow: store.common.isMobileMenuShow,
        isSuccessLogin: store.user.isSuccessLogin
    }),
    dispatch => ({dispatch})
)(Header)
