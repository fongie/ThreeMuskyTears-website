import React, { Component } from 'react';
import YoutubeVideo from './YoutubeVideo';

class Movies extends Component {
    constructor(props) {
        super(props);
        const moviesStyling = {
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-around',
            padding: 20,
        }
        const videosStyling = {
            padding: 20,
        }
        this.state = {
            moviesStyling,
            videosStyling,
        }
    }
    render() {
        return (
            <div style={this.state.moviesStyling}>
                <YoutubeVideo style={this.state.videosStyling} video='Zfw0LlX3XpM' />
                <YoutubeVideo video='pyXRlzNtjfw' />
            </div>
        );
    }
}

export default Movies;
