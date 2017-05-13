import React, { Component } from 'react';
import Slideshow from './Slideshow';
import Movies from './Movies';
import YoutubeVideo from './YoutubeVideo';

class Media extends Component {
        constructor(props) {
            super(props);
            const mediaStyling = {
                display: 'flex',
                flexFlow: 'row',
            }
            this.state = {
                mediaStyling,
                }
        }
    render() {
        return (
            <div style={this.state.mediaStyling}>
                <Slideshow />
                <Movies />
            </div>
        );
    }
}

export default Media;
