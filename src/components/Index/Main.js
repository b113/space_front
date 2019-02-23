import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {fetchPosts} from '../../redux/actions/common';
import {connect} from 'react-redux';
import HeroBlock from './components/HeroBlock';
import Article from './components/Article';
import {Header, Footer} from '../Common/index';
import uuid from 'uuid/v1';

class Main extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    articles : PropTypes.object,
    categories: PropTypes.object
  }

  state = {
      from : 8
  }
  
  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(fetchPosts());
  }

  render() {
    const {articles} = this.props;
    const {from} = this.state;
    const lastArticle = articles.data && articles.data.slice(from,-1)[0];
    return (
      <div className='main_page'> 
        <div className='main-container'>
          <div className='container'>
              {lastArticle && 
                  <HeroBlock 
                      title={lastArticle.name} 
                      description={lastArticle.model}
                      image={lastArticle.model} 
                  />
              }
              <div className="article_wrap">
              {
                  articles.data && 
                  articles.data.length > 0 && 
                  articles.data.map((el)=> 
                      <Article 
                          key={uuid()} 
                          title={el.name} 
                          description={el.model}
                          image={el.model}
                      />)
              }
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
    store => ({
        articles : store.common.articles,
        categories : store.common.categories
    }),
    dispatch => ({dispatch})
)(Main);