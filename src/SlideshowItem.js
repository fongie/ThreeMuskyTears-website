import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YoutubeVideo from './YoutubeVideo';

/**
 * An item (picture) in a slideshow.
 * Note that CSS for the fading animation "fade" is found in App.css
 * due to it being difficult to do this inline.
 * @prop An image or youtube object to put in the slideshow - required
 */

class SlideshowItem extends Component {
    constructor(props) {
        super(props);
        const youtubeStyling = {
            width: 700,
            maxWidth: '100%',
            height: 495,
        }
        this.state = {
            youtubeStyling,
        }
    }
    render() {
        if (this.props.type === 'image') {
            return (
                <div className="fade">
                    <img 
                        src={this.props.image} 
                        style={this.props.style} 
                        alt="Poster for an old three musky tears gig" 
                    />
                </div>
            );
        } else if (this.props.type === 'youtube') {
            return (
                <YoutubeVideo style={this.state.youtubeStyling} video={this.props.link} />
            );
        }
    }
}

SlideshowItem.propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
}
SlideshowItem.defaultProps = {
    image: null,
    video: '',
}

export default SlideshowItem;
