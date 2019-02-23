import React , { Component } from 'react';
import PropTypes from 'prop-types'

class Post extends  Component{
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return(
            <div className="post">
                <img src="https://placehold.it/1000x500" alt="space" />
                <h3>Header</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolor, fugiat facere, sed est, repellendus assumenda facilis officiis reiciendis voluptate quo neque vitae libero ut. Natus dolor ut alias recusandae.</p>
            </div>
        )
    }
}

export default Post;