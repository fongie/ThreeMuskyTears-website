import React, { Component } from 'react';
import logo from '../img/TMTlogomktmindre.png';

class Logo extends Component {
    render() {
        var logoStyling = {
            maxWidth: '100%',
            paddingTop: 20,
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
