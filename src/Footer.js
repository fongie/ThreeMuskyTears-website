import React, { Component } from 'react';
import CopyrightLink from './CopyrightLink';
import fbicon from './img/facebook-squared.svg';
import instaicon from './img/instagram-fill.svg';
import emailicon from './img/email.png';

class Footer extends Component {
    render() {
        const footerStyling = {
            fontSize: '0.8em',
            textAlign: 'center',
        }
        const socialIconStyling = {
            display: 'inline-block',
            maxWidth: 25,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '30%',
        }
        return (
            <div style={footerStyling}>
                <a href="https://www.instagram.com/threemuskytears_/">
                    <img 
                        src={instaicon} 
                        alt="instagram-icon" 
                        style={socialIconStyling}
                    />
                </a>
                <a href="https://www.facebook.com/threemuskytears/">
                    <img 
                        src={fbicon} 
                        alt="facebook-icon" 
                        style={socialIconStyling}
                    />
                </a>
                <a href="mailto:mkorlinge@hotmail.com">
                    <img 
                        src={emailicon} 
                        alt="email-icon" 
                        style={socialIconStyling}
                    />
                </a>
                <CopyrightLink/>
            </div>
        );
    }
}

export default Footer;
