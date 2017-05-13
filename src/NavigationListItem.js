import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavigationListItem extends Component {
    render() {
        const navigationListItemStyling = {
            marginRight: 10,
            display: 'inline-block',
            fontSize: '1.3em'
        }
        //link and hover link color are defined in App.css
        const linkStyling = {
            default: {
                textDecoration: 'none',
                paddingTop: 15,
                paddingRight: 10,
            },
        }
        return (
            <li style={navigationListItemStyling}>
                <Link 
                    to={this.props.link} 
                    style={linkStyling.default}
                >
                    {this.props.name}
                </Link>
            </li>
        );
    }
}

NavigationListItem.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default NavigationListItem;
