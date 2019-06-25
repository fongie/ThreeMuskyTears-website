import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SlideshowItem from './SlideshowItem';

/**
 * Creates a slideshow with objects.
 * @props type The type of object. Currently supported image or youtube
 * @props objects The object, listing the items to be rendered with their respective props
 */

const propTypes = {
    type: PropTypes.string.isRequired,
    objects: PropTypes.object.isRequired,
};

const defaultProps = {
    link: '',
    style: null,
};

class Slideshow extends Component {
    constructor(props) {
        super(props);

        const slideshowStyling = {
            padding: 10,
            width: 700,
            maxWidth: '80%',
        }
        const buttonStyling = {
            backgroundColor: '#ffffff',
            borderRadius: '40%',
            fontSize: 20,
            paddingRight: 15,
            paddingLeft: 15,
        }
        this.state = {
            slideshowStyling,
            buttonStyling,
            currentIndex: 0,
        }
        this.changeSlides = this.changeSlides.bind(this);
        this.prevImage = this.prevImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
    }
    changeSlides(nr) {
        const indexOutOfBounds = (this.state.currentIndex + nr < 0 || this.state.currentIndex + nr > this.props.objects.length-1);
        if (indexOutOfBounds) {
            if (this.state.currentIndex === 0) {
                this.setState({currentIndex: this.props.objects.length-1});
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
        if (this.props.type === 'image') {
            return (
                <div style={this.state.slideshowStyling}>
                    <SlideshowItem 
                        type='image' 
                        image={this.props.objects[this.state.currentIndex].image} 
                        style={this.props.objects[this.state.currentIndex].style} 
                    />
                    <button 
                        style={this.state.buttonStyling} 
                        onClick={this.prevImage}
                    >
                        &#10094;
                    </button>
                    <button 
                        style={this.state.buttonStyling} 
                        onClick={this.nextImage}
                    >
                        &#10095;
                    </button>
                </div>
            );
        } else if(this.props.type === 'youtube') {
            return (
                <div style={this.state.slideshowStyling}>
                    <SlideshowItem 
                        type='youtube' 
                        link={this.props.objects[this.state.currentIndex].link} 
                    />
                    <button 
                        style={this.state.buttonStyling} 
                        onClick={this.prevImage}
                    >
                        &#10094;
                    </button>
                    <button 
                        style={this.state.buttonStyling} 
                        onClick={this.nextImage}
                    >
                        &#10095;
                    </button>
                </div>
            );
        }
    }
}

Slideshow.propTypes = propTypes;

Slideshow.defaultProps = defaultProps;

export default Slideshow;
