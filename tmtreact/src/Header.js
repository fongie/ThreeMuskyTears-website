import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

class Header extends Component {

    render() {
        var headerStyling = {
            float: 'left',
            marginBottom: 30,
            paddingTop: 5,
            alignSelf: 'stretch',
            width: '100%'
        };
        return (
            <div id="header" style={headerStyling}>
                <Logo/>
                <Navigation/>
            </div>
        );
    }
}

export default Header;
