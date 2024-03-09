import qs from 'querystring-es3';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

/** An iframe containing a youtube video
 *  This was adapted from code fetched at https://www.sitepoint.com/quick-tip-video-player-component-react/
 * @props video The ID of the video on youtube. Required
 */

const propTypes = {
    video: PropTypes.string.isRequired
};

class YoutubeVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            youtube: 'http://www.youtube.com/embed/',
        }
        this.getIdFromVideoString = this.getIdFromVideoString.bind(this);
    }

    getIdFromVideoString (vString) {
        return vString;
    }

    render() {
        const {video, ...htmlTags} = this.props;
        const src = `${this.state.youtube}${this.getIdFromVideoString(video)}`;

        return (
            <iframe
                src={src}
                frameBorder='0'
                webkitAllowFullScreen
                mozallowfullscreen
                allowFullScreen
                {...htmlTags}
            />
        );
    }
}

YoutubeVideo.propTypes = propTypes;

export default YoutubeVideo;
