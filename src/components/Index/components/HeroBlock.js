import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HeroBlock extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  }

  render() {
    const {title, description, image} = this.props;
    return (
      <div className='hero_wrapper'>
          <div className='hero_img'>
            <img src={image} alt={title} />
          </div>
          <div className='hero_text'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
      </div>
    )
  }
}
