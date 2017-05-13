
import React, { Component } from 'react';

class SlideButton extends Component {
    constructor(props) {
        super(props);
        const btnStyling = {
            cursor: 'pointer',
            top: 0,
            width: 'auto',
            marginTop: -22,
            padding: 16,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
            transition: '0.6s easy',
            borderRadius: '0 3px 3px 0',
        }
        this.state = {
            btnStyling,
        }
    }
    render() {
        return (
        );
    }
}

export default SlideButton;
