import React, { Component } from 'react';
import logo from '../img/TMTlogomktmindre.png';
import { Link } from 'react-router-dom';

class Logo extends Component {
    render() {
        var logoStyling = {
            maxWidth: '100%',
            paddingTop: 20,
        };
        return (
            <div>
                <Link to='/'>
                <img src={logo} style={logoStyling}  alt="three musky tears band stockholm uppsala logo"/>
            </Link>
            </div>
        );
    }
}

export default Logo;
