import React , { Component } from 'react';
import PropTypes from 'prop-types'

import Comment from '../Comment';



class CommentsList extends  Component{
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return(
            <div className="comments-list">
                <h2>Comments</h2>
                <Comment>
                    <Comment />
                </Comment>
            </div>
        )
    }
}

export default CommentsList;