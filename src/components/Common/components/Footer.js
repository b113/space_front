import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import { FacebookIcon, FacebookShareButton,
        GooglePlusIcon, GooglePlusShareButton,
        TwitterIcon, TwitterShareButton, 
        } from 'react-share';
import { Link, withRouter } from 'react-router-dom';



class Footer extends Component {
    
    static propTypes = {
        location : PropTypes.object
    }
    
    render () {
        const {location} = this.props;
        const url =`${window.location.origin}${location.pathname}`;
    
        return(
            <div className="footer">
                <div className = "container">
                    <div className="row">
                        <div className="social-icons">
                            <FacebookShareButton url={url}>
                                <FacebookIcon  size={32} round={true} />
                            </FacebookShareButton>
                            <GooglePlusShareButton url={url}>
                                <GooglePlusIcon  size={32} round={true} />
                            </GooglePlusShareButton>
                            <TwitterShareButton url={url}>
                                <TwitterIcon  size={32} round={true} />
                            </TwitterShareButton>
                        </div>   
                        <Link to="/">
                            <span className="logo">Space Project</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Footer);
