import React, { Component } from 'react';
import SlideshowItem from './SlideshowItem';
import posterBorgen from '../img/poster_borgen.jpg';
import posterKings from '../img/poster_kings.jpg';
import posterCosteau from '../img/costeau.jpg';


class Slideshow extends Component {
    constructor(props) {
        super(props);

        const slideshowStyling = {
            maxWidth: '33%',
        }
        const buttonStyling = {
            backgroundColor: '#ffffff',
            borderRadius: '40%',
            fontSize: 20,
            paddingRight: 15,
            paddingLeft: 15,
        }
        this.state = {
            images: [
                {
                    image: posterBorgen,
                    style: {width:'100%'}
                },
                {
                    image: posterKings,
                    style: {width: '50%',}
                },
                {
                    image: posterCosteau,
                    style: {width:'100%',paddingTop:'15%',paddingBottom:'18.5%'}
                }
            ],
            slideshowStyling,
            buttonStyling,
            currentIndex: 0,
        }
        this.changeSlides = this.changeSlides.bind(this);
        this.prevImage = this.prevImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
    }

    changeSlides(nr) {
        const indexOutOfBounds = (this.state.currentIndex + nr < 0 || this.state.currentIndex + nr > this.state.images.length-1);
        if (indexOutOfBounds) {
            if (this.state.currentIndex === 0) {
                this.setState({currentIndex: this.state.images.length-1});
                return;
            } else {
                this.setState({currentIndex: 0});
                return;
            }
        }
        let current = this.state.currentIndex;
        this.setState({currentIndex: current + nr});
        return;
    }
    prevImage() {
        this.changeSlides(-1);
    }
    nextImage() {
        this.changeSlides(1);
    }
    render() {
        return (
            <div style={this.state.slideshowStyling}>
                <SlideshowItem image={this.state.images[this.state.currentIndex].image} style={this.state.images[this.state.currentIndex].style} />
                <button style={this.state.buttonStyling} onClick={this.prevImage}>&#10094;</button>
                <button style={this.state.buttonStyling} onClick={this.nextImage}>&#10095;</button>
            </div>
        );
    }
}

export default Slideshow;
