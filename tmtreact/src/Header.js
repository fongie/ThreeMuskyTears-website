import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

class Header extends Component {

    render() {
        const headerStyling = {
            margin: 'auto',
            marginBottom: 30,
            paddingTop: 5,
            width: '700',
        };
        return (
            <div id="header" style={headerStyling}>
                <Logo />
                <Navigation/>
            </div>
        );
    }
}

export default Header;
