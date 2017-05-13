import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationListItem extends Component {
    render() {
        var navigationListItemStyling = {
            marginRight: 10,
            display: 'inline-block',
            fontSize: '1.3em'
        }
        //link and hover link color are defined in App.css
        var linkStyling = {
            default: {
                textDecoration: 'none',
                paddingTop: 15,
                paddingRight: 10,
            },
        }
        return (
            <li style={navigationListItemStyling}><Link to={this.props.link} style={linkStyling.default}>{this.props.name}</Link></li>
        );
    }
}

export default NavigationListItem;
