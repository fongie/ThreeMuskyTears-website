import React, { Component } from 'react';
import NavigationListItem from './NavigationListItem';

class Navigation extends Component {
    render() {
        const navigationStyling = {
            textDecoration: 'none',
            textAlign: 'center',
            paddingTop: 10,
            marginTop: 10,
            fontFamily: 'Short Stack',
        }

        const navigationListStyling = {
            listStyle: 'none',
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0
        }

        return (
            <div style={navigationStyling}>
                <nav>
                    <ul style={navigationListStyling}>
                        <NavigationListItem 
                            name="Home" 
                            link="/"
                        />
                        <NavigationListItem 
                            name="Tour" 
                            link="/tour"
                        />
                        <NavigationListItem 
                            name="Media" 
                            link="/media"
                        />
                        <NavigationListItem 
                            name="About" 
                            link="/about"
                        />
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;
