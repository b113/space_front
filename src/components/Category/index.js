import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import Article from '../Index/components/Article';
import { withRouter } from 'react-router-dom';
import {fetchPostsById} from '../../redux/actions/common/';

class Category extends Component {


  componentDidMount() {
    const { dispatch , location } = this.props;
    dispatch(fetchPostsById(location.pathname.split('/')[2]));
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id } } } = this.props;
    const { id: idPrev } = prevProps.match.params;

    const { dispatch , location } = this.props;
    

    if (id !== idPrev) {
      dispatch(fetchPostsById(location.pathname.split('/')[2]));
    }
  }


  render() {
    
    const { categoriesById, location , dispatch } = this.props;
    console.log(categoriesById)
    return (
      <div className="container">
        <div className="article_wrap">
              {
                  categoriesById.data && 
                  categoriesById.data.length > 0 && 
                  categoriesById.data.map((el)=> 
                      <Article 
                          key={uuid()} 
                          title={el.title} 
                          description={el.content}
                          image={el.urlPicture}
                      />)
              }
        </div>
      </div>
    )
  }
}


export default withRouter(connect(
  store => ({
    categoriesById : store.common.categoriesById,
  }),
  dispatch => ({dispatch})
)(Category));
