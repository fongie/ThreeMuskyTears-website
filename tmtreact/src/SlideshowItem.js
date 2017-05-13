import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * An item (picture) in a slideshow.
 * Note that CSS for the fading animation "fade" is found in App.css
 * due to it being difficult to do this inline.
 * @prop An image object to put in the slideshow - required
 */

class SlideshowItem extends Component {
    render() {
        return (
            <div className="fade">
                <img src={this.props.image} style={this.props.style} alt="Poster for an old three musky tears gig" />
            </div>
        );
    }
}

SlideshowItem.propTypes = {
    image: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
}

export default SlideshowItem;
