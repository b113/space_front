import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList';
import Post from './Post';

export default class Article extends Component {

  render() {
    return (
      <div className = "container main-container">
        <Post />
        <CommentsList />
      </div>
    )
  }
}
