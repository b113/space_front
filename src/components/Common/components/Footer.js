import React, { PureComponent  } from 'react';
import { FacebookIcon, FacebookShareButton,
        GooglePlusIcon, GooglePlusShareButton,
        TwitterIcon, TwitterShareButton, 
        } from 'react-share';
import { Link } from 'react-router-dom';


class Footer extends PureComponent {
    render () {
        return(
            <div className="footer">
                <div className = "container">
                    <div className="row">
                        <div className="social-icons">
                            <FacebookShareButton url={window.location.href}>
                                <FacebookIcon  size={32} round={true} />
                            </FacebookShareButton>
                            <GooglePlusShareButton url={window.location.href}>
                                <GooglePlusIcon  size={32} round={true} />
                            </GooglePlusShareButton>
                            <TwitterShareButton url={window.location.href}>
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

export default Footer;
