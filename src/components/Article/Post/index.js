import React , { Component } from 'react';
import PropTypes from 'prop-types'

class Post extends  Component{

    render() {
        return(
            <div className="post">
                <img src="https://wi-images.condecdn.net/image/B1NZW376pxM/crop/1620/f/space_11.jpg" alt="space" />
                <h3>Header</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolor, fugiat facere, sed est, repellendus assumenda facilis officiis reiciendis voluptate quo neque vitae libero ut. Natus dolor ut alias recusandae.</p>
            </div>
        )
    }
}

export default Post;