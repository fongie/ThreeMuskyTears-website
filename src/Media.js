import React, { Component } from 'react';
import Slideshow from './Slideshow';
import posterBorgen from '../img/poster_borgen.jpg';
import posterKings from '../img/poster_kings.jpg';
import posterCosteau from '../img/costeau.jpg';
import posterPsb from '../img/psb.jpg';

class Media extends Component {

    constructor(props) {
        super(props);
        const mediaStyling = {
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
        }

        this.state = {
            mediaStyling,
            slideshowImages: [
                {
                    image: posterPsb,
                    style: {width:'50%'}
                },
                {
                    image: posterBorgen,
                    style: {width:'100%'}
                },
                {
                    image: posterKings,
                    style: {width: '50%'}
                },
                {
                    image: posterCosteau,
                    style: {width:'100%',paddingTop:'15%',paddingBottom:'18%'}
                }
            ],
            youtubeVideos: [
                {
                    link: 'ygauhmh0d6c',
                },
                {
                    link: 'Zfw0LlX3XpM',
                },
                {
                    link: 'pyXRlzNtjfw',
                }
            ]
        }
    }

    render() {
        return (
            <div style={this.state.mediaStyling}>
                <Slideshow 
                    type="image" 
                    objects={this.state.slideshowImages} 
                />
                <Slideshow 
                    type="youtube" 
                    objects={this.state.youtubeVideos} 
                />
            </div>
        );
    }
}

export default Media;
