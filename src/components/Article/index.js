import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList';
import Post from './Post';

export default class Article extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className = "container">
        <Post />
        <CommentsList />
      </div>
    )
  }
}
