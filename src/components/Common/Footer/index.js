import React, { Component  } from 'react';
import { FacebookShareButton } from 'react-share';


class Footer extends Component {
    render () {
        return(
            <Footer>
                <div className = "container">
                    <FacebookShareButton />
                </div>
            </Footer>
        )
    }
}

export default Footer;
