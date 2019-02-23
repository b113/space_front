import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import uuid from 'uuid/v1';
import {fetchCategories} from '../../../redux/actions/common/';


class Header extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    categories : PropTypes.object
  }
  
  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(fetchCategories());
  }

  render() {
    const {categories} = this.props;

    return (
      <div className='header'>
        <div className='header-nav'>
          <div className='logo'><Link to="/" >Space Project</Link></div>
          <div>
            <ul className='header-menu'>
              <li>
                Category
                <ul className='sub-menu'>
                    { categories.data && 
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
                <Link to="#">Sign Up/Sign In</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}
export default connect(    
    store => ({
        categories : store.common.categories
    }),
    dispatch => ({dispatch})
)(Header)
