import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Article extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  }

  render() {
    const {title, description, image} = this.props;
    return (
      <Link to={`/article/${title}`} className='article_item'>
        <div className='article_img_placeholder'>
            <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    )
  }
}
