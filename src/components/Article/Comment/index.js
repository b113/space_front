import React , { Component } from 'react';
import PropTypes from 'prop-types'

class Comment extends  Component{
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return(
            <div className="comment">
                <div className = "author">
                    <img src="https://placehold.it/50x50" alt="author" className = "author__img"/>
                    <span className = "author__name">Name Author</span>    
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolor, fugiat facere, sed est, repellendus assumenda facilis officiis reiciendis voluptate quo neque vitae libero ut. Natus dolor ut alias recusandae.</p>
            </div>
        )
    }
}

export default Comment;