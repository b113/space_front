import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import {fetchCategories, mobileMenuHandle} from '../../../redux/actions/common/';
import Aside from './Aside';
import SignupLogin from '../../SignupLogin';
import Modal from "react-responsive-modal";


class Header extends PureComponent {

  static propTypes = {
    dispatch: PropTypes.func,
    categories: PropTypes.object
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

  render() {
    const { categories, isMobileMenuShow } = this.props;
    const { open } = this.state;
    return (
      <div className='header'>
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
                      <Link to={`/category/${el.name}`}>{el.name}</Link>
                    </li>)
                  }
                </ul>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link onClick={this.onOpenModal} to="#">Sign Up/Sign In</Link>
              </li>
            </ul>
          </div>
          <button className="burger" onClick={this.mobileMenuHandle}>
            <span></span>
          </button>
        </div>
        {isMobileMenuShow && <Aside/>}
        <Modal open={open} onClose={this.onCloseModal} center>
          <SignupLogin cancelCallback={this.onCloseModal} />
        </Modal>
      </div>
    )
  }
}
export default connect(    
    store => ({
        categories : store.common.categories,
        isMobileMenuShow: store.common.isMobileMenuShow
    }),
    dispatch => ({dispatch})
)(Header)
