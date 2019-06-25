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
            maxWidth: '100%',
        };
        return (
            <div style={headerStyling}>
                <Logo />
                <Navigation />
            </div>
        );
    }
}

export default Header;
