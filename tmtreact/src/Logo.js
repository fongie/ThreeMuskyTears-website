import React, { Component } from 'react';
import logo from '../img/TMTlogomindre.png';

class Logo extends Component {
    render() {
        var logoStyling = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '100%'
        };
        return (
            <div id="logo">
                <a href="http://www.threemuskytears.se">
                    <img src={logo} style={logoStyling}  alt="three musky tears band stockholm uppsala logo"/>
                </a>
            </div>
        );
    }
}

export default Logo;
