import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SlideDot extends Component {
    constructor(props) {
        super(props);
        const dotStyling = {
            fontSize: 24,
        }
        this.state = {
            dotStyling,
        }
    }
    render() {
        return (
            <p style={this.state.dotStyling} onClick={this.props.onclick}>.</p>
        );
    }
}

SlideDot.propTypes = {
    onlick: PropTypes.function.isRequired,
}

export default SlideDot;
