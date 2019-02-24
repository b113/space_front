import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import uuid from 'uuid/v1';
import {fetchCategories} from '../../../redux/actions/common/';
import {mobileMenuHandle} from '../../../redux/actions/common/';


class Aside extends PureComponent {
    static propTypes = {
        dispatch: PropTypes.func,
        categories : PropTypes.object
    }

    constructor(props) {
        super(props);
        this.handlerShow = this.handlerShow.bind(this);
    }
    
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(fetchCategories());
    }

    handlerShow(){
        const {dispatch} = this.props;
        dispatch(mobileMenuHandle());
    }

    
    render() {
        const {categories, isMobileMenuShow} = this.props;
        console.log(this.props)
        return (
        <aside className={`aside ${!isMobileMenuShow ? "open" : "" }`} onClick={this.handlerShow}>
            <div className="aside-menu" onClick={(e) => e.stopPropagation()}>
                <ul>
                    <li>
                        Category
                        <ul className='sub-menu'>
                            { categories.data && 
                            categories.data.length > 0 &&
                            categories.data.map(el => <li 
                                onClick={this.handlerShow}
                                key={uuid()}>
                                <Link to={`/category/${el}`}>{el}</Link>
                            </li>)
                            }
                        </ul>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
                <div className="close" onClick={this.handlerShow}>
                    <span></span>
                </div>
            </div>
        </aside>
        )
    }
}
export default connect(    
    store => ({
        categories : store.common.categories,
        isMobileMenuShow: store.common.isMobileMenuShow
    }),
    dispatch => ({dispatch})
)(Aside)
